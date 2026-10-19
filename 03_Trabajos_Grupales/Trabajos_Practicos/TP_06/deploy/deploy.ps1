# deploy.ps1
# Script de despliegue automatizado para EcoHarmony Park en nico-server

$ErrorActionPreference = "Stop"
$Server = "nico@192.168.1.14"
$RemotePath = "~/ecoharmony"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$TP06Dir = Resolve-Path "$ScriptDir\.."

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Despliegue EcoHarmony Park -> nico-server" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. Asegurar clave SSH pública en el servidor (para acceso sin password)
Write-Host "`n[1/3] Verificando clave SSH en $Server..." -ForegroundColor Yellow
$PubKeyPath = "$env:USERPROFILE\.ssh\id_ed25519.pub"
if (Test-Path $PubKeyPath) {
    $PubKey = (Get-Content $PubKeyPath -Raw).Trim()
    ssh -o ConnectTimeout=10 $Server "mkdir -p ~/.ssh && chmod 700 ~/.ssh && (grep -qF '$PubKey' ~/.ssh/authorized_keys 2>/dev/null || echo '$PubKey' >> ~/.ssh/authorized_keys) && chmod 600 ~/.ssh/authorized_keys"
}

# 2. Empaquetar y transferir archivos
Write-Host "`n[2/3] Empaquetando y transfiriendo archivos a $Server..." -ForegroundColor Yellow
Push-Location $TP06Dir
try {
    tar --exclude="node_modules" --exclude=".git" --exclude="*.tar.gz" --exclude="__pycache__" --exclude=".pytest_cache" -czf ecoharmony-tp06.tar.gz .
    scp ecoharmony-tp06.tar.gz "$($Server):~/ecoharmony-tp06.tar.gz"
} finally {
    Remove-Item -Path "ecoharmony-tp06.tar.gz" -Force -ErrorAction SilentlyContinue
    Pop-Location
}

# 3. Descomprimir, compilar y levantar con Docker Compose
Write-Host "`n[3/3] Compilando imagen y levantando contenedor Docker en $Server..." -ForegroundColor Yellow
ssh $Server "mkdir -p $RemotePath && tar -xzf ~/ecoharmony-tp06.tar.gz -C $RemotePath && rm -f ~/ecoharmony-tp06.tar.gz && cd $RemotePath/deploy && docker compose down && docker compose up -d --build"

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host " [OK] Despliegue completado con exito!" -ForegroundColor Green
Write-Host " Acceso LAN:     http://192.168.1.14:8092" -ForegroundColor Green
Write-Host " Acceso Publico: https://ecoharmony.nzlopez07.dpdns.org" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
