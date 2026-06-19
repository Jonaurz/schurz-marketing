import "server-only";

import { promises as fs } from "node:fs";
import { createHash, randomBytes } from "node:crypto";
import path from "node:path";

export type ContactSubmission = {
  id: string;
  tokenHash: string;
  createdAt: string;
  expiresAt: string;
  confirmedAt: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  currentWebsite: string;
  socialChannels: string;
  branche: string;
  location: string;
  googleProfile: string;
  consentText: string;
};

type ContactSubmissionStore = {
  submissions: ContactSubmission[];
};

export type NewContactSubmission = Pick<
  ContactSubmission,
  | "name"
  | "email"
  | "phone"
  | "services"
  | "currentWebsite"
  | "socialChannels"
  | "branche"
  | "location"
  | "googleProfile"
  | "consentText"
>;

const tokenLifetimeMs = 1000 * 60 * 60 * 24;

function submissionsFilePath() {
  return path.join(process.cwd(), "data", "contact-submissions.json");
}

function tokenHash(token: string) {
  return createHash("sha256").update(token).digest("base64url");
}

function normalizeStore(store: Partial<ContactSubmissionStore> | null | undefined): ContactSubmissionStore {
  return {
    submissions: Array.isArray(store?.submissions) ? store.submissions : [],
  };
}

async function readSubmissionStore(): Promise<ContactSubmissionStore> {
  try {
    const raw = await fs.readFile(submissionsFilePath(), "utf8");
    return normalizeStore(JSON.parse(raw));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return { submissions: [] };
    throw error;
  }
}

async function writeSubmissionStore(store: ContactSubmissionStore) {
  const filePath = submissionsFilePath();
  const directory = path.dirname(filePath);
  const tempPath = `${filePath}.${Date.now()}.tmp`;

  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(tempPath, `${JSON.stringify(normalizeStore(store), null, 2)}\n`, "utf8");
  await fs.rename(tempPath, filePath);
}

function removeExpired(submissions: ContactSubmission[]) {
  const now = Date.now();

  return submissions.filter((submission) => {
    if (submission.confirmedAt) return true;
    return Date.parse(submission.expiresAt) > now;
  });
}

export async function createPendingSubmission(data: NewContactSubmission) {
  const store = await readSubmissionStore();
  const token = randomBytes(32).toString("base64url");
  const now = new Date();
  const submission: ContactSubmission = {
    ...data,
    id: randomBytes(12).toString("base64url"),
    tokenHash: tokenHash(token),
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + tokenLifetimeMs).toISOString(),
    confirmedAt: "",
  };

  store.submissions = [...removeExpired(store.submissions), submission];
  await writeSubmissionStore(store);

  return { token, submission };
}

export async function findPendingSubmissionByToken(token: string) {
  if (!token) return null;

  const store = await readSubmissionStore();
  const hashedToken = tokenHash(token);
  const submission = store.submissions.find((item) => item.tokenHash === hashedToken);

  if (!submission || submission.confirmedAt) return null;
  if (Date.parse(submission.expiresAt) < Date.now()) return null;

  return submission;
}

export async function markSubmissionConfirmed(id: string) {
  const store = await readSubmissionStore();
  const confirmedAt = new Date().toISOString();
  let confirmedSubmission: ContactSubmission | null = null;

  store.submissions = store.submissions.map((submission) => {
    if (submission.id !== id) return submission;
    confirmedSubmission = { ...submission, confirmedAt };
    return confirmedSubmission;
  });

  await writeSubmissionStore(store);

  return confirmedSubmission;
}

export async function deleteSubmission(id: string) {
  const store = await readSubmissionStore();
  store.submissions = store.submissions.filter((submission) => submission.id !== id);
  await writeSubmissionStore(store);
}
