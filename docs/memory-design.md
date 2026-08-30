# Memory design

A memory is structured knowledge, not merely an embedding. Each record has a type, title, content, importance, provenance, and tags. This makes decisions inspectable and keeps future AI answers attributable.

Phase 1 stores and filters structured memories. Phase 2 adds hybrid keyword and semantic retrieval. Phase 3 adds extraction and deduplication: candidate memories are searched first, then either merged with an existing record or created as new knowledge.

Future ranking combines semantic similarity (55%), importance (20%), recency (15%), and source quality (10%). Embeddings remain separate from canonical memory content so providers can be replaced.
