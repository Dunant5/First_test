import { memoryInputSchema } from "@devmind/core";
import { getDatabase, memories } from "@devmind/database";
import { and, desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
export async function GET(request: Request) { const url=new URL(request.url); const projectId=url.searchParams.get("projectId"); const type=url.searchParams.get("type") as typeof memories.$inferSelect.type|null; const filters=[]; if(projectId)filters.push(eq(memories.projectId,projectId)); if(type)filters.push(eq(memories.type,type)); return NextResponse.json(await getDatabase().select().from(memories).where(filters.length?and(...filters):undefined).orderBy(desc(memories.updatedAt))); }
export async function POST(request: Request) { const result=memoryInputSchema.safeParse(await request.json()); if(!result.success)return NextResponse.json({error:"Invalid memory",issues:result.error.issues},{status:400}); const {source,...input}=result.data; const [memory]=await getDatabase().insert(memories).values({...input,sourceType:source?.type,sourceReference:source?.reference}).returning(); return NextResponse.json(memory,{status:201}); }
