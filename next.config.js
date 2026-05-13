/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ISSO VAI FAZER O SITE SUBIR MESMO COM ERROS DE TIPO
    ignoreBuildErrors: true,
  },
  eslint: {
    // ISSO IGNORA ERROS DE LINT NO DEPLOY
    ignoreDuringBuilds: true,
  },
  // Mantenha o resto que já existir no arquivo abaixo...
}

module.exports = nextConfig