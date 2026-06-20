import { promises as fs } from "node:fs";
import { randomUUID } from "node:crypto";
import path from "node:path";

export type ReferenceCase = {
  id: string;
  sector: string;
  region: string;
  title: string;
  problem: string;
  goal: string;
  consequence: string;
  solution: string;
  result: string;
  services: string;
  imageUrl: string;
  imageAlt: string;
  mobileImageUrl: string;
  mobileImageAlt: string;
  sortOrder: number;
  published: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  project: string;
  result: string;
  sortOrder: number;
  published: boolean;
};

export type SiteContent = {
  references: ReferenceCase[];
  testimonials: Testimonial[];
};

const defaultContent: SiteContent = {
  references: [],
  testimonials: [],
};

function contentFilePath() {
  return path.join(process.cwd(), "data", "site-content.json");
}

function normalizeContent(content: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    references: Array.isArray(content?.references)
      ? content.references.map((reference) => ({
          ...reference,
          region: reference.region ?? "",
          goal: reference.goal ?? "",
          result: reference.result ?? "",
          services: reference.services ?? "",
          imageUrl: reference.imageUrl ?? "",
          imageAlt: reference.imageAlt ?? "",
          mobileImageUrl: reference.mobileImageUrl ?? "",
          mobileImageAlt: reference.mobileImageAlt ?? "",
        }))
      : [],
    testimonials: Array.isArray(content?.testimonials) ? content.testimonials : [],
  };
}

function bySortOrder<T extends { sortOrder: number; title?: string; company?: string }>(a: T, b: T) {
  if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
  return (a.title ?? a.company ?? "").localeCompare(b.title ?? b.company ?? "", "de");
}

export async function readContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(contentFilePath(), "utf8");
    return normalizeContent(JSON.parse(raw));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return defaultContent;
    throw error;
  }
}

export async function writeContent(content: SiteContent) {
  const filePath = contentFilePath();
  const directory = path.dirname(filePath);
  const tempPath = `${filePath}.${Date.now()}.tmp`;

  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(tempPath, `${JSON.stringify(normalizeContent(content), null, 2)}\n`, "utf8");
  await fs.rename(tempPath, filePath);
}

export async function getPublicContent() {
  const content = await readContent();

  return {
    references: content.references.filter((item) => item.published).sort(bySortOrder),
    testimonials: content.testimonials.filter((item) => item.published).sort(bySortOrder),
  };
}

export function makeContentId(prefix: string) {
  return `${prefix}-${randomUUID()}`;
}
