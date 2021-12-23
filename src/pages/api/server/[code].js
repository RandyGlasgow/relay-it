import rateLimit from "@/utils/rate-limit";

// limit requests per minute
const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(req, res) {
  try {
    await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
    switch (req.query.code) {
      case "500":
        res.status(500).json({
          name: "Internal Server Error",
          message:
            "Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
          use_case: [
            "The server has encountered a situation it doesn't know how to handle.",
            "Generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
          ],
        });
        break;
      case "501":
        res.status(501).json({
          name: "Not Implemented",
          message:
            "Indicates that the server does not support the functionality required to fulfill the request.",
          use_case: [
            "Implementation of a feature required by the client has been delayed.",
            "New functionality that is being developed.",
          ],
        });
        break;

      case "502":
        res.status(502).json({
          name: "Bad Gateway",
          message:
            "Indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
          use_case: [
            "The server is temporarily down or being upgraded.",
            "The server is acting as a gateway or proxy and is temporarily unable to forward the request.",
          ],
        });
        break;

      case "503":
        res.status(503).json({
          name: "Service Unavailable",
          message:
            "Indicates that the server is currently unable to handle the request due to a temporary overloading or maintenance of the server.",
          use_case: [
            "The server is overloaded.",
            "The server is under maintenance.",
            "The server is not currently available.",
            "Temporary conditions for the server",
          ],
        });
        break;

      case "504":
        res.status(504).json({
          name: "Gateway Timeout",
          message:
            "The error response given when the server is acting as a gateway or proxy and cannot get a response in time from the upstream server.",
          use_case: [
            "Awaiting a response from the upstream server.",
            "The upstream server is temporarily down or being upgraded.",
          ],
        });
        break;

      case "505":
        res.status(505).json({
          name: "HTTP Version Not Supported",
          message:
            "The server does not support the HTTP protocol version used in the request.",
          use_case: [
            "The client is using an HTTP version that the server does not support.",
          ],
        });
        break;

      case "506":
        res.status(506).json({
          name: "Variant Also Negotiates",
          message:
            "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
          use_case: [
            "The client has asked for a variant that is not available.",
            "When there are multiple options for the resource.",
            "The server is not configured to engage in transparent content negotiation.",
          ],
        });
        break;

      case "507":
        res.status(507).json({
          name: "Insufficient Storage",
          message:
            "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
          use_case: [
            "The server is unable to store the representation needed to successfully complete the request.",
          ],
        });
        break;

      case "508":
        res.status(508).json({
          name: "Loop Detected",
          message:
            "It indicates that the server terminated an operation because it encountered an infinite loop while processing a request with 'Depth: infinity'. This status indicates that the entire operation failed.",
          use_case: [
            "The client has asked for a resource that has infinite depth.",
            "The server has encountered an infinite loop while processing a request with 'Depth: infinity'. This status indicates that the entire operation failed.",
          ],
        });
        break;

      case "509":
        res.status(509).json({
          name: "Bandwidth Limit Exceeded",
          message:
            "The server has exceeded the bandwidth specified by the server for the resource.",
          use_case: [
            "The server has an upper limit on the bandwidth that it can use.",
          ],
        });
        break;

      case "510":
        res.status(510).json({
          name: "Not Extended",
          message:
            "Further extensions to the request are required for the server to fulfil it.",
          use_case: [
            "The server requires the client to send additional extension headers.",
          ],
        });
        break;

      case "511":
        res.status(511).json({
          name: "Network Authentication Required",
          message: "The client needs to authenticate to gain network access.",
          use_case: [
            "The client needs to authenticate to gain network access.",
          ],
        });
        break;

      default:
        res
          .status(200)
          .json({
            message:
              "This status code doesn't seem to be valid. If this is out of date open up a pull request to update this code.",
          });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      name: "Internal Server Error",
      message:
        "Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
    });
  }
}
