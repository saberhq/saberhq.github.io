{{- /* The résumé as Markdown, read from its web page at every build. */ -}}
{{- $h := readFile "static/resume/index.html" -}}
{{- $h = index (split $h "<body") 1 | default $h | replaceRE `^[^>]*>` "" -}}
{{- range slice "style" "script" "helmet" -}}
  {{- $h = replaceRE (printf `(?s)<%s\b.*?</%s>` . .) "" $h -}}
{{- end -}}
{{- $h = replaceRE `(?s)<a\b[^>]*?href="([^"]+)"[^>]*>(.*?)</a>` "[$2]($1)" $h -}}
{{- $h = replaceRE `(?s)<h1\b[^>]*>` "\n# " $h -}}
{{- $h = replaceRE `(?s)<span[^>]*data-seclabel[^>]*>` "\n## " $h -}}
{{- $h = replaceRE `(?s)<li\b[^>]*>(\s*<span[^>]*data-ac[^>]*>[^<]*</span>)?` "\n- " $h -}}
{{- $h = replaceRE `(?s)<(strong|b)\b[^>]*>(.*?)</(strong|b)>` "**$2**" $h -}}
{{- $h = replaceRE `(?s)<br\s*/?>` " " $h -}}
{{- $h = replaceRE `(?s)</(div|p|li|ul|ol|header|section|h\d|tr)>` "\n" $h -}}
{{- $h = replaceRE `<div\b` "\n<div" $h -}}
{{- $h = replaceRE `(?s)<[^>]+>` "" $h -}}
{{- $h = htmlUnescape $h -}}
{{- $h = replaceRE `[ \t\x{00a0}]+` " " $h -}}
{{- $h = replaceRE `(?m)^ +| +$` "" $h -}}
{{- $h = replaceRE `(?m)^\d\d\s*\n\s*(## )` "$1" $h -}}
{{- $h = replaceRE `(?m)^(SABER HAFEZQORANI — RÉSUMÉ.*|Print / Save as PDF)$` "" $h -}}
{{- $h = replaceRE `\n{3,}` "\n\n" $h -}}
> {{ .Description }} Web page: {{ "resume/" | absURL }} (it prints to a two-page PDF).

{{ strings.TrimSpace $h }}
