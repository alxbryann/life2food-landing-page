# Guía de Deployment - Life2Food Landing Page

## Opción 1: Vercel (Recomendado - Más Fácil) ⭐

### Pasos:
1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

2. **Despliega en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project"
   - Importa tu repositorio
   - Vercel detectará automáticamente que es Next.js
   - Haz clic en "Deploy"
   - ¡Listo! Tu sitio estará en `tu-proyecto.vercel.app`

### Ventajas:
- ✅ Gratis para proyectos personales
- ✅ SSL automático
- ✅ Deploy automático en cada push
- ✅ Optimizado para Next.js
- ✅ CDN global

---

## Opción 2: Netlify

### Pasos:
1. **Sube tu código a GitHub** (igual que arriba)

2. **Despliega en Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión con GitHub
   - "Add new site" → "Import an existing project"
   - Conecta tu repositorio
   - Configuración:
     - **Build command:** `npm run build` o `pnpm build`
     - **Publish directory:** `.next`
   - Haz clic en "Deploy site"

---

## Opción 3: Servidor Propio (VPS/Cloud)

### Requisitos:
- Servidor con Node.js 18+ instalado
- PM2 para gestionar el proceso
- Nginx como reverse proxy (opcional pero recomendado)

### Pasos:

1. **En tu servidor, clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instala dependencias:**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Construye el proyecto:**
   ```bash
   npm run build
   ```

4. **Instala PM2 (gestor de procesos):**
   ```bash
   npm install -g pm2
   ```

5. **Inicia la aplicación con PM2:**
   ```bash
   pm2 start npm --name "life2food" -- start
   # o con pnpm:
   pm2 start pnpm --name "life2food" -- start
   ```

6. **Configura PM2 para iniciar al arrancar:**
   ```bash
   pm2 startup
   pm2 save
   ```

7. **Configura Nginx (opcional pero recomendado):**
   
   Crea un archivo `/etc/nginx/sites-available/life2food`:
   ```nginx
   server {
       listen 80;
       server_name tu-dominio.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Habilita el sitio:
   ```bash
   sudo ln -s /etc/nginx/sites-available/life2food /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

8. **Configura SSL con Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d tu-dominio.com
   ```

---

## Opción 4: Docker (Para cualquier servidor)

### Crear Dockerfile:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Nota: Necesitas configurar Next.js para standalone output

Agrega esto a `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'standalone',
  // ... resto de la configuración
}
```

### Construir y ejecutar:
```bash
docker build -t life2food .
docker run -p 3000:3000 life2food
```

---

## Opción 5: GitHub Pages (Solo para sitios estáticos)

Si quieres exportar como sitio estático:

1. **Modifica `next.config.mjs`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // ... resto
   }
   ```

2. **Construye:**
   ```bash
   npm run build
   ```

3. **Sube la carpeta `out` a GitHub Pages**

---

## Recomendación Final

Para un proyecto de landing page como este, **Vercel es la mejor opción** porque:
- Es gratis
- Muy fácil de usar
- Optimizado para Next.js
- SSL automático
- Deploy automático en cada push

¿Necesitas ayuda con alguna opción específica?

