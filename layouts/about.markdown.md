{{- /* About as Markdown (index.md beside index.html). */ -}}
# {{ .Title }}

> {{ .Description }}

{{ .Params.heading }} {{ .Params.lede }}

Web page: {{ .Permalink }}{{ with .Params.resume }} · résumé: {{ . | absURL }}{{ end }}

## {{ .Params.longLabel | default "The long version" }}

{{ partial "seo/md-links" (dict "text" .RenderShortcodes "page" .) | strings.TrimSpace }}
{{- with .Params.topics }}

Topics: {{ delimit . ", " }}{{ with $.Params.topicAccent }}, {{ . }}{{ end }}
{{- end }}

## Elsewhere
{{- range site.Data.header.elsewhere }}
- [{{ .name }}]({{ .url }})
{{- end }}

---
{{ site.Params.author }} · {{ site.Home.Permalink }} · words and pictures CC BY 4.0 (credit the author, link the page)
