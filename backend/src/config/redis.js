const IORedis = require('ioredis');
let redis;

const connectRedis = () => {
  const url = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
  redis = new IORedis(url);
  redis.on('connect', () => console.log('Redis connected'));
  redis.on('error', (err) => console.error('Redis error', err));
  return redis;
};

export default { connectRedis, redisInstance : () => redis };
