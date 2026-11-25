{{- /* About as Markdown (index.md beside index.html). */ -}}
{{- $c := site.Data.career -}}
{{- $chapters := partial "about/chapters" . -}}
# {{ .Title }}

> {{ .Description }}

{{ .Params.heading }} {{ .Params.lede }}

Web page: {{ .Permalink }}

## {{ .Params.longLabel | default "The long version" }}

{{ partial "seo/md-links" (dict "text" .RenderShortcodes "page" .) | strings.TrimSpace }}
{{- with .Params.topics }}

Topics: {{ delimit . ", " }}{{ with $.Params.topicAccent }}, {{ . }}{{ end }}
{{- end }}
{{- with $chapters.now }}

## Now
{{- range . }}
{{ partial "inline/about-md-role.html" . }}
{{- end }}
{{- end }}

## Timeline
{{- range $chapters.past }}
{{ partial "inline/about-md-role.html" .role }}
{{- with .degree }}
- {{ .start }} to {{ .end }}: **{{ .title }} ({{ .short }}), {{ .field }}**, [{{ .org }}]({{ .org_url | absURL }}).{{ if .thesis }} Thesis: [{{ .thesis }}]({{ .thesis_url }}).{{ end }}
{{- end }}
{{- end }}

## Papers
{{- range $paper := site.Data.papers }}
- {{ .byline | default (delimit .authors ", ") | strings.TrimSuffix "." }}. "{{ .title }}". {{ .venue }}, {{ (time.AsTime .date).Year }}. [doi:{{ .doi }}](https://doi.org/{{ .doi }})
  {{- range .links }} · [{{ .name }}]({{ .url }}){{ end }}
  {{- range where site.RegularPages "Params.paper" $paper.id }} · [Blog]({{ .Permalink }}){{ end }}
{{- end }}

## Skills

{{ delimit $c.skills " · " }}

## Elsewhere
{{- range site.Data.header.elsewhere }}
- [{{ .name }}]({{ .url }})
{{- end }}

---
{{ site.Params.author }} · {{ site.Home.Permalink }} · words and pictures CC BY 4.0 (credit the author, link the page)

{{- define "_partials/inline/about-md-role.html" -}}
- {{ (time.AsTime (print .start "-01")).Format "Jan 2006" }} to {{ with .end }}{{ (time.AsTime (print . "-01")).Format "Jan 2006" }}{{ else }}now{{ end }}: **{{ .title }}**{{ with .note }} ({{ . }}){{ end }}, [{{ .org }}]({{ .org_url | absURL }}).{{ with .place }} {{ . }}.{{ end }}
{{- range .lines }}
  - {{ . }}
{{- end }}
{{- with .tools }}
  - Tools: {{ range $i, $t := . }}{{ if $i }}, {{ end }}{{ with $t.url }}[{{ $t.name }}]({{ . | absURL }}){{ else }}{{ $t.name }}{{ end }}{{ end }}
{{- end }}
{{- end }}
