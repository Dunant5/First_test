export interface GitHubRepositoryRef { owner: string; repo: string; url: string }
export interface GitHubSyncState { repository: GitHubRepositoryRef; cursor?: string; syncedAt?: Date }
