import { projectInputSchema } from "@devmind/core";
import { getDatabase, projects } from "@devmind/database";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() { return NextResponse.json(await getDatabase().select().from(projects).orderBy(desc(projects.updatedAt))); }
export async function POST(request: Request) {
  const result = projectInputSchema.safeParse(await request.json());
  if (!result.success) return NextResponse.json({ error: "Invalid project", issues: result.error.issues }, { status: 400 });
  const [project] = await getDatabase().insert(projects).values(result.data).returning();
  return NextResponse.json(project, { status: 201 });
}
