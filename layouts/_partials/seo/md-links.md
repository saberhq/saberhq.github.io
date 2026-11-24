{{- /* Markdown with every link absolute: site paths get the address, a page's own files get its address. */ -}}
{{- $md := .text -}}
{{- $md = replaceRE `\]\(/` (printf "](%s" site.BaseURL) $md -}}
{{- with .page }}{{ $md = replaceRE `\]\((?:\./)?([^():/#\s]+\.(?:webp|png|jpe?g|gif|svg|pdf))\)` (printf "](%s$1)" .Permalink) $md }}{{ end -}}
{{- return $md -}}
