{{- /* A page as Markdown (index.md beside index.html). */ -}}
# {{ .Title }}

> {{ .Description }}

By [{{ site.Params.author }}]({{ "about/" | absURL }}){{ if eq .Type "blog" }} · {{ .Date.Format "2006-01-02" }}{{ if ne (.Lastmod.Format "2006-01-02") (.Date.Format "2006-01-02") }} · updated {{ .Lastmod.Format "2006-01-02" }}{{ end }}{{ with index site.Data.areas (.Params.area | default "") }} · {{ .label }}{{ end }}{{ end }} · web page: {{ .Permalink }}
{{- range where site.Data.papers "id" (.Params.paper | default "") }}

The paper: {{ .byline | default (delimit .authors ", ") }}. "{{ .title }}". {{ .venue }}, {{ (time.AsTime .date).Year }}. https://doi.org/{{ .doi }}
{{- end }}

{{ partial "seo/md-links" (dict "text" .RenderShortcodes "page" .) | strings.TrimSpace }}

---
{{ site.Params.author }} · {{ site.Home.Permalink }} · words and pictures CC BY 4.0 (credit the author, link the page)
