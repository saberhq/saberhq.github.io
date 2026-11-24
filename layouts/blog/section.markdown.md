{{- /* The blog list as Markdown (index.md beside index.html). */ -}}
# {{ .Title }} · {{ site.Params.author }}

> {{ .Description }}

Web page: {{ .Permalink }}
{{ range .RegularPages.ByDate.Reverse }}
## [{{ .Title }}]({{ or .Params.external .Permalink }})

{{ .Date.Format "2006-01-02" }}{{ with index site.Data.areas (.Params.area | default "") }} · {{ .label }}{{ end }}{{ with .Params.external }} · on the Sidechain site · as Markdown: {{ . }}index.md{{ else }} · as Markdown: {{ with .OutputFormats.Get "markdown" }}{{ .Permalink }}{{ end }}{{ end }}

{{ .Params.description | default (.Summary | plainify) }}
{{ end }}
---
{{ site.Params.author }} · {{ site.Home.Permalink }} · words and pictures CC BY 4.0 (credit the author, link the page)
