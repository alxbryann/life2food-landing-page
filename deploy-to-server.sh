#!/bin/bash

# Script de deployment automatizado para Life2Food
# Uso: ./deploy-to-server.sh

set -e

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuración
SSH_KEY="$HOME/Downloads/life2food.pem"
SERVER_USER="ec2-user"
SERVER_HOST="3.149.164.235"
SERVER_PATH="~/life2food-landing-page"

echo -e "${YELLOW}🚀 Iniciando deployment de Life2Food...${NC}"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ Error: No se encontró package.json${NC}"
  echo "Asegúrate de estar en el directorio del proyecto"
  exit 1
fi

# Verificar que existe la clave SSH
if [ ! -f "$SSH_KEY" ]; then
  echo -e "${RED}❌ Error: No se encontró la clave SSH en $SSH_KEY${NC}"
  exit 1
fi

# 1. Construir el proyecto
echo -e "${YELLOW}📦 Construyendo proyecto Next.js...${NC}"
npm run build

if [ ! -d ".next" ]; then
  echo -e "${RED}❌ Error: El build falló${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Build completado${NC}"

# 2. Subir archivos al servidor
echo -e "${YELLOW}📤 Subiendo archivos al servidor...${NC}"
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.next/cache' \
  -e "ssh -i $SSH_KEY" \
  . ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

echo -e "${GREEN}✅ Archivos subidos${NC}"

# 3. Reiniciar la aplicación en el servidor
echo -e "${YELLOW}🔄 Reiniciando aplicación en el servidor...${NC}"
ssh -i "$SSH_KEY" ${SERVER_USER}@${SERVER_HOST} << 'ENDSSH'
  cd ~/life2food-landing-page
  pm2 restart life2food || pm2 start ecosystem.config.js
  pm2 save
  echo "✅ Aplicación reiniciada"
ENDSSH

echo -e "${GREEN}🎉 Deployment completado exitosamente!${NC}"
echo -e "${GREEN}   Tu aplicación está disponible en:${NC}"
echo -e "${GREEN}   - https://www.life2food.com${NC}"
echo -e "${GREEN}   - https://life2food.com${NC}"

