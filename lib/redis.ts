import { Redis } from "@upstash/redis";
import "dotenv/config";

if (!process.env.UPSTASH_REDIS_TOKEN) {
  throw new Error("UPSTASH_REDIS_REST_TOKEN is not defined");
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URI,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

export default redis;
