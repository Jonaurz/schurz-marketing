import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const contentTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

function isAllowedFileName(fileName: string) {
  return /^[a-f0-9-]+\.(jpe?g|png|webp)$/i.test(fileName);
}

async function readReferenceImage(fileName: string) {
  if (!isAllowedFileName(fileName)) return null;

  const extension = path.extname(fileName).toLowerCase();
  const contentType = contentTypes[extension];
  if (!contentType) return null;

  const filePath = path.join(process.cwd(), "public", "uploads", "references", fileName);

  try {
    const file = await fs.readFile(filePath);
    return { file, contentType };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

export async function GET(
  _: Request,
  { params }: { params: Promise<{ fileName: string }> },
) {
  const { fileName } = await params;
  const image = await readReferenceImage(fileName);

  if (!image) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(image.file, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": image.contentType,
    },
  });
}

export async function HEAD(
  _: Request,
  { params }: { params: Promise<{ fileName: string }> },
) {
  const { fileName } = await params;
  const image = await readReferenceImage(fileName);

  if (!image) {
    return new NextResponse(null, { status: 404 });
  }

  return new NextResponse(null, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Length": String(image.file.byteLength),
      "Content-Type": image.contentType,
    },
  });
}
