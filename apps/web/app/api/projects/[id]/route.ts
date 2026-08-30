import { projectInputSchema } from "@devmind/core";
import { getDatabase, projects } from "@devmind/database";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
type Context = { params: Promise<{ id: string }> };
export async function GET(_: Request, { params }: Context) { const { id } = await params; const [project] = await getDatabase().select().from(projects).where(eq(projects.id,id)); return project ? NextResponse.json(project) : NextResponse.json({error:"Project not found"},{status:404}); }
export async function PATCH(request: Request, { params }: Context) { const { id }=await params; const result=projectInputSchema.partial().safeParse(await request.json()); if(!result.success)return NextResponse.json({error:"Invalid project",issues:result.error.issues},{status:400}); const [project]=await getDatabase().update(projects).set({...result.data,updatedAt:new Date()}).where(eq(projects.id,id)).returning(); return project?NextResponse.json(project):NextResponse.json({error:"Project not found"},{status:404}); }
export async function DELETE(_: Request, { params }: Context) { const { id }=await params; const [project]=await getDatabase().delete(projects).where(eq(projects.id,id)).returning({id:projects.id}); return project?new NextResponse(null,{status:204}):NextResponse.json({error:"Project not found"},{status:404}); }
