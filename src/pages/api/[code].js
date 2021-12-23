import successStatus from "./success/[code]";
import serverStatus from "./server/[code]";
import rateLimit from "@/utils/rate-limit";
import clientStatus from "./client/[code]";
// universal endpoint for all possible http codes

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function statusHandler(req, res) {
  try {
    limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute

    const statusCode = req.query.code;

    if (statusCode < 300) {
      successStatus(req, res);
    } else if (statusCode < 500) {
      clientStatus(req, res);
    } else if (statusCode < 600) {
      serverStatus(req, res);
    }
  } catch {
    // rate limit error
    res.status(429).json({
      message: "Too many requests, please try again later",
    });
  }
}
