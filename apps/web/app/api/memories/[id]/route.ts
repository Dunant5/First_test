import { memoryInputSchema } from "@devmind/core";
import { getDatabase, memories } from "@devmind/database";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
type Context={params:Promise<{id:string}>};
export async function GET(_:Request,{params}:Context){const{id}=await params;const[memory]=await getDatabase().select().from(memories).where(eq(memories.id,id));return memory?NextResponse.json(memory):NextResponse.json({error:"Memory not found"},{status:404});}
export async function PATCH(request:Request,{params}:Context){const{id}=await params;const result=memoryInputSchema.partial().safeParse(await request.json());if(!result.success)return NextResponse.json({error:"Invalid memory",issues:result.error.issues},{status:400});const{source,...input}=result.data;const[memory]=await getDatabase().update(memories).set({...input,...(source&&{sourceType:source.type,sourceReference:source.reference}),updatedAt:new Date()}).where(eq(memories.id,id)).returning();return memory?NextResponse.json(memory):NextResponse.json({error:"Memory not found"},{status:404});}
export async function DELETE(_:Request,{params}:Context){const{id}=await params;const[memory]=await getDatabase().delete(memories).where(eq(memories.id,id)).returning({id:memories.id});return memory?new NextResponse(null,{status:204}):NextResponse.json({error:"Memory not found"},{status:404});}
