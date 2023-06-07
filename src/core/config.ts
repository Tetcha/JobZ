export const config = {
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000/api',
    NEXT_PUBLIC_API_MOMO: process.env.NEXT_PUBLIC_API_MOMO || '',
    NEXT_PUBLIC_TOKEN_MOMO: process.env.NEXT_PUBLIC_TOKEN_MOMO || '',
    SERVER_SOCKET_URL: process.env.SERVER_SOCKET_URL || 'https://trip.monoinfinity.net',
    SERVER_SOCKET_PATH: process.env.SERVER_SOCKET_PATH || '/socket.io',
    minDistance: process.env.MIN_DISTANCE || 20000,
};
