# TEMPORARY auto-save backend: the page POSTs the layout to /save and GETs it back from /load.
# Run: powershell -ExecutionPolicy Bypass -File TEMP_save_server.ps1   (must be running for auto-save to work)
# Delete this file and the TEMP_* files when the layout is final.
$out = Join-Path $PSScriptRoot "TEMP_venn_layout.json"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:8765/")
$listener.Start()
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $res = $ctx.Response
  try {
    $res.AddHeader("Access-Control-Allow-Origin", "*")
    $res.AddHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    $res.AddHeader("Access-Control-Allow-Headers", "Content-Type")
    if ($ctx.Request.HttpMethod -eq "GET") {
      $json = "{}"
      if (Test-Path $out) { $json = [System.IO.File]::ReadAllText($out) }
      if ([string]::IsNullOrWhiteSpace($json)) { $json = "{}" }
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
      $res.ContentType = "application/json"
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } elseif ($ctx.Request.HttpMethod -eq "POST") {
      $reader = New-Object System.IO.StreamReader($ctx.Request.InputStream, [System.Text.Encoding]::UTF8)
      $body = $reader.ReadToEnd()
      $null = $body | ConvertFrom-Json
      [System.IO.File]::WriteAllText($out, $body)
    } else { $res.StatusCode = 204 }
  } catch { $res.StatusCode = 400 }
  try { $res.Close() } catch {}
}
