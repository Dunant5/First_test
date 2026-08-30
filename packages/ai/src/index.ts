export type { AIProvider } from "@devmind/core";

export class MissingAIProviderError extends Error {
  constructor(provider: string) { super(`AI provider \"${provider}\" is not configured`); this.name = "MissingAIProviderError"; }
}
