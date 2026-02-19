// Configuración PM2 para gestionar el proceso en producción
module.exports = {
  apps: [
    {
      name: 'life2food',
      script: 'npm',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        // URL del backend para que /api/waitlist/count funcione en producción
        API_URL: 'https://api.life2food.com',
        NEXT_PUBLIC_API_URL: 'https://api.life2food.com',
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '1G',
    },
  ],
};




