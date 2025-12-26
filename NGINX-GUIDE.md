# Guía: Estructura de Nginx y Deployment

## 📁 Estructura Actual de Nginx

### Archivos de Configuración

```
/etc/nginx/
├── sites-available/          # Configuraciones disponibles (no activas)
│   └── life2food             # Tu sitio actual
├── sites-enabled/            # Configuraciones activas (symbolic links)
│   └── life2food -> ../sites-available/life2food
└── nginx.conf               # Configuración principal
```

**Cómo funciona:**
- `sites-available/`: Todas las configuraciones guardadas
- `sites-enabled/`: Solo los sitios activos (son links simbólicos a `sites-available`)
- Nginx solo lee los archivos en `sites-enabled/`

---

## 🔧 Estructura del Archivo de Configuración Actual

Tu archivo `/etc/nginx/sites-available/life2food` tiene **4 bloques server**:

### 1. HTTP → HTTPS (sin www)
```nginx
server {
    listen 80;
    server_name life2food.com;
    return 301 https://www.life2food.com$request_uri;
}
```

### 2. HTTP → HTTPS (con www)
```nginx
server {
    listen 80;
    server_name www.life2food.com;
    return 301 https://www.life2food.com$request_uri;
}
```

### 3. HTTPS sin www → HTTPS con www
```nginx
server {
    listen 443 ssl http2;
    server_name life2food.com;
    # ... certificados SSL ...
    return 301 https://www.life2food.com$request_uri;
}
```

### 4. Servidor Principal (donde está tu app)
```nginx
server {
    listen 443 ssl http2;
    server_name www.life2food.com;
    # ... certificados SSL ...
    
    location / {
        proxy_pass http://localhost:3000;  # ← Aquí conecta con Next.js
        # ... headers de proxy ...
    }
}
```

---

## 🚀 Cómo Actualizar/Redesplegar la Aplicación

### Opción 1: Desde tu máquina local (Recomendado)

```bash
# 1. Construir el proyecto localmente
cd /Users/bryanriano/Downloads/life2food-landing-page
npm run build

# 2. Subir los archivos al servidor (sin node_modules)
rsync -avz --exclude 'node_modules' --exclude '.git' \
  -e "ssh -i ~/Downloads/life2food.pem" \
  . ec2-user@3.149.164.235:~/life2food-landing-page/

# 3. En el servidor: Reiniciar la aplicación
ssh -i ~/Downloads/life2food.pem ec2-user@3.149.164.235
cd ~/life2food-landing-page
pm2 restart life2food
```

### Opción 2: Script automatizado

Crea un script `deploy-to-server.sh` en tu máquina local:

```bash
#!/bin/bash
set -e

echo "🔨 Construyendo proyecto..."
npm run build

echo "📤 Subiendo archivos al servidor..."
rsync -avz --exclude 'node_modules' --exclude '.git' \
  -e "ssh -i ~/Downloads/life2food.pem" \
  . ec2-user@3.149.164.235:~/life2food-landing-page/

echo "🔄 Reiniciando aplicación..."
ssh -i ~/Downloads/life2food.pem ec2-user@3.149.164.235 \
  "cd ~/life2food-landing-page && pm2 restart life2food"

echo "✅ Deployment completado!"
```

Hazlo ejecutable y úsalo:
```bash
chmod +x deploy-to-server.sh
./deploy-to-server.sh
```

---

## ➕ Cómo Agregar un Nuevo Site a Nginx

### Paso 1: Crear la configuración en `sites-available`

```bash
ssh -i ~/Downloads/life2food.pem ec2-user@3.149.164.235
sudo nano /etc/nginx/sites-available/nuevo-sitio
```

Ejemplo de configuración para un nuevo sitio:

```nginx
# HTTP → HTTPS (sin www)
server {
    listen 80;
    server_name nuevo-dominio.com;
    return 301 https://www.nuevo-dominio.com$request_uri;
}

# HTTP → HTTPS (con www)
server {
    listen 80;
    server_name www.nuevo-dominio.com;
    return 301 https://www.nuevo-dominio.com$request_uri;
}

# HTTPS sin www → HTTPS con www
server {
    listen 443 ssl http2;
    server_name nuevo-dominio.com;
    
    ssl_certificate /etc/letsencrypt/live/nuevo-dominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nuevo-dominio.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    return 301 https://www.nuevo-dominio.com$request_uri;
}

# Servidor principal
server {
    listen 443 ssl http2;
    server_name www.nuevo-dominio.com;
    
    ssl_certificate /etc/letsencrypt/live/nuevo-dominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nuevo-dominio.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    access_log /var/log/nginx/nuevo-dominio-access.log;
    error_log /var/log/nginx/nuevo-dominio-error.log;
    
    # Opción A: Proxy a una aplicación Node.js (puerto diferente)
    location / {
        proxy_pass http://localhost:3001;  # Cambia el puerto según tu app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Opción B: Servir archivos estáticos
    # location / {
    #     root /var/www/nuevo-dominio;
    #     index index.html index.htm;
    #     try_files $uri $uri/ =404;
    # }
}
```

### Paso 2: Habilitar el sitio (crear symbolic link)

```bash
sudo ln -s /etc/nginx/sites-available/nuevo-sitio /etc/nginx/sites-enabled/
```

### Paso 3: Obtener certificado SSL

```bash
sudo certbot --nginx -d nuevo-dominio.com -d www.nuevo-dominio.com
```

Certbot automáticamente:
- Obtiene el certificado SSL
- Modifica tu archivo de configuración para agregar las rutas de los certificados

### Paso 4: Verificar y recargar Nginx

```bash
# Verificar que la configuración sea válida
sudo nginx -t

# Si todo está bien, recargar Nginx
sudo systemctl reload nginx
```

---

## 🗑️ Cómo Deshabilitar un Site

```bash
# Remover el link simbólico (no elimina el archivo)
sudo rm /etc/nginx/sites-enabled/nombre-del-sitio

# Recargar Nginx
sudo nginx -t && sudo systemctl reload nginx
```

El archivo sigue existiendo en `sites-available/`, solo que ya no está activo.

---

## 📋 Comandos Útiles de Nginx

```bash
# Verificar configuración (MUY IMPORTANTE antes de recargar)
sudo nginx -t

# Recargar configuración (sin downtime)
sudo systemctl reload nginx

# Reiniciar Nginx completamente
sudo systemctl restart nginx

# Ver estado de Nginx
sudo systemctl status nginx

# Ver logs de acceso
sudo tail -f /var/log/nginx/life2food-access.log

# Ver logs de errores
sudo tail -f /var/log/nginx/life2food-error.log

# Ver todos los logs de errores de Nginx
sudo tail -f /var/log/nginx/error.log
```

---

## 📋 Comandos Útiles de PM2 (Gestión de Aplicaciones)

```bash
# Ver estado de todas las aplicaciones
pm2 status

# Ver logs en tiempo real
pm2 logs life2food

# Ver solo errores
pm2 logs life2food --err

# Reiniciar aplicación
pm2 restart life2food

# Reiniciar todas las aplicaciones
pm2 restart all

# Detener aplicación
pm2 stop life2food

# Iniciar aplicación
pm2 start life2food

# Eliminar aplicación de PM2
pm2 delete life2food

# Guardar configuración actual (importante después de cambios)
pm2 save

# Monitoreo en tiempo real
pm2 monit
```

---

## 🔄 Flujo Completo de Deployment

### Para Actualizar Life2Food:

```bash
# 1. En tu máquina local
cd /Users/bryanriano/Downloads/life2food-landing-page
git pull  # Si usas git
npm install  # Si hay nuevas dependencias
npm run build

# 2. Subir al servidor
rsync -avz --exclude 'node_modules' --exclude '.git' \
  -e "ssh -i ~/Downloads/life2food.pem" \
  . ec2-user@3.149.164.235:~/life2food-landing-page/

# 3. Reiniciar en el servidor
ssh -i ~/Downloads/life2food.pem ec2-user@3.149.164.235 \
  "cd ~/life2food-landing-page && pm2 restart life2food"
```

### Si necesitas instalar nuevas dependencias en el servidor:

```bash
ssh -i ~/Downloads/life2food.pem ec2-user@3.149.164.235
cd ~/life2food-landing-page
npm install
pm2 restart life2food
```

---

## 🏗️ Estructura del Proyecto en el Servidor

```
/home/ec2-user/
└── life2food-landing-page/
    ├── .next/              # Build de Next.js
    ├── app/                # Código fuente
    ├── components/         # Componentes
    ├── public/             # Archivos estáticos
    ├── package.json
    ├── ecosystem.config.js # Configuración PM2
    └── logs/               # Logs de PM2
        ├── err.log
        └── out.log
```

**Puerto de la aplicación:** `3000` (definido en `ecosystem.config.js`)

---

## ✅ Checklist para Agregar un Nuevo Site

- [ ] Crear archivo en `/etc/nginx/sites-available/nombre-sitio`
- [ ] Configurar dominios en `server_name`
- [ ] Habilitar sitio: `sudo ln -s ...`
- [ ] Verificar DNS apunta a la IP del servidor
- [ ] Obtener SSL: `sudo certbot --nginx -d dominio.com -d www.dominio.com`
- [ ] Verificar configuración: `sudo nginx -t`
- [ ] Recargar Nginx: `sudo systemctl reload nginx`
- [ ] Si es una app Node.js: iniciarla con PM2 en un puerto diferente
- [ ] Verificar que funciona: `curl https://www.dominio.com`

---

## 🆘 Troubleshooting

### Si Nginx no inicia después de cambios:

```bash
# Ver el error específico
sudo nginx -t

# Revisar logs de error
sudo tail -n 50 /var/log/nginx/error.log

# Si necesitas revertir, deshabilita el sitio problemático
sudo rm /etc/nginx/sites-enabled/sitio-problematico
sudo systemctl reload nginx
```

### Si la aplicación no responde:

```bash
# Verificar que PM2 está corriendo
pm2 status

# Ver logs de la aplicación
pm2 logs life2food

# Verificar que el puerto está en uso
sudo netstat -tlnp | grep 3000

# Probar localmente en el servidor
curl http://localhost:3000
```

---

¿Necesitas ayuda con algún paso específico?

