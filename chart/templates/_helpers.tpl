{{- define "default.labels" }}
 labels:
  app.kubernetes.io/name: {{ .Release.Name }}
  helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
  app.kubernetes.io/managed-by: {{ .Release.Service }}
  app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{- define "default.annotations" }}
 annotations:
  meta.helm.sh/release-name: {{ .Release.Name }}
  meta.helm.sh/release-namespace: {{ .Values.namespace }}
{{- end }}

{{- define "ingress.annotations" }}
 annotations:
  meta.helm.sh/release-name: {{ .Release.Name }}
  meta.helm.sh/release-namespace: {{ .Values.namespace }}
  kubernetes.io/ingress.class: nginx
  nginx.ingress.kubernetes.io/rewrite-target: /$1
{{- end }}
