{{- /* The home page as Markdown (index.md beside index.html). */ -}}
# {{ site.Params.author }}

> {{ .Description }}

{{ partial "seo/md-links" (dict "text" .Params.bio) }}

- About: {{ "about/" | absURL }} (as Markdown: {{ "about/index.md" | absURL }})
- Résumé: {{ "resume/" | absURL }} (as Markdown: {{ "resume/index.md" | absURL }})
- Blog: {{ "blog/" | absURL }} (as Markdown: {{ "blog/index.md" | absURL }})
- Sidechain, the Virtual Cell Challenge 2026 entry: {{ "sidechain/" | absURL }} (its index for AI tools: {{ "sidechain/llms.txt" | absURL }})
- Everything on this site, for AI tools: {{ "llms.txt" | absURL }}

## News
{{- range .Params.news }}
- {{ .date }}: {{ partial "seo/md-links" (dict "text" .text) }}
{{- end }}

## Elsewhere
{{- range site.Data.header.elsewhere }}
- [{{ .name }}]({{ .url }})
{{- end }}

---
{{ site.Params.author }} · {{ .Permalink }} · words and pictures CC BY 4.0 (credit the author, link the page)
