/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.1.18',
    '192.168.1.18:3000',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
};

export default nextConfig;

