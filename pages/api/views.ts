import type { NextApiRequest, NextApiResponse } from "next";
import redis from "@/lib/redis";

type ResponseData = {
  views: string | number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { id, increment } = req.query;

  if (id === null) {
    const e = new Error("Unknow id");
    return e;
  }
  if (parseInt(increment + "")) {
    const views = await redis.hincrby("views", id as string, 1);
    return res.status(200).json({ views });
  } else {
    const views = (await redis.hget("views", id as string)) ?? 0;
    return res.status(200).json({ views: views as number });
  }
}
