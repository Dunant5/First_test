import { z } from "zod";

export const projectStatuses = ["active", "paused", "archived"] as const;
export const memoryTypes = ["decision", "architecture", "fact", "requirement", "issue", "solution", "note", "preference", "context"] as const;
export const memorySourceTypes = ["manual", "github", "chat", "commit", "pull_request", "issue"] as const;
export const taskStatuses = ["todo", "doing", "done"] as const;
export const taskPriorities = ["low", "medium", "high"] as const;
export const activityTypes = ["commit", "pull_request", "issue", "memory", "task", "chat"] as const;

export const repositorySchema = z.object({ provider: z.literal("github"), owner: z.string().min(1), repo: z.string().min(1), url: z.url() });
export const projectInputSchema = z.object({ name: z.string().trim().min(1).max(120), description: z.string().trim().max(1000).optional(), repository: repositorySchema.optional(), techStack: z.array(z.string().trim().min(1)).default([]), status: z.enum(projectStatuses).default("active") });
export const memoryInputSchema = z.object({ projectId: z.uuid(), type: z.enum(memoryTypes), title: z.string().trim().min(1).max(200), content: z.string().trim().min(1), importance: z.number().int().min(1).max(10).default(5), source: z.object({ type: z.enum(memorySourceTypes), reference: z.string().optional() }).optional(), tags: z.array(z.string().trim().min(1)).default([]) });
export const taskInputSchema = z.object({ projectId: z.uuid(), title: z.string().trim().min(1).max(200), description: z.string().optional(), status: z.enum(taskStatuses).default("todo"), priority: z.enum(taskPriorities).default("medium"), source: z.string().optional(), dueAt: z.coerce.date().optional() });

export type ProjectInput = z.infer<typeof projectInputSchema>;
export type MemoryInput = z.infer<typeof memoryInputSchema>;
export type TaskInput = z.infer<typeof taskInputSchema>;

export interface AIProvider {
  chat(messages: Array<{ role: "system" | "user" | "assistant"; content: string }>, options?: { model?: string; temperature?: number }): Promise<{ content: string; usage?: { inputTokens: number; outputTokens: number } }>;
  embed(texts: string[]): Promise<number[][]>;
}
