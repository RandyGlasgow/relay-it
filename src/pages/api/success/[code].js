import rateLimit from "../../../utils/rate-limit";
// response codes for success

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function successStatus(req, res) {
  try {
    await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
    switch (req.query.code) {
      case "200":
        res.status(200).json({
          name: "OK",
          message: "Indicates that the request has succeeded.",
          use_case: ["The request has succeeded."],
        });
        break;
      case "201":
        res.status(201).json({
          name: "Created",
          message:
            "Indicates that the request has been fulfilled and resulted in a new resource being created.",
          use_case: [
            "Adding a row to a table",
            "Create a new resource",
            "Creating a new user",
            "Creating a new post",
          ],
        });
        break;

      case "202":
        res.status(202).json({
          name: "Accepted",
          message:
            "Indicates that the request has been accepted for processing, but the processing has not been completed.",
          notes:
            "The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.",
          use_case: [
            "Long running processes such as batch processing.",
            "Asynchronous actions such as the dispatch of a webhook.",
          ],
        });
        break;

      case "203":
        res.status(203).json({
          name: "Non-Authoritative Information",
          message:
            "Indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server's 200 (OK) response .",
          use_case: [
            "The response is from a cached copy of the resource.",
            "The resource has been updated by another client.",
          ],
        });
        break;

      case "204":
        res.status(204).json({
          name: "No Content",
          message:
            "Indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.",
          use_case: ["The resource has been deleted."],
        });
        break;
      case "205":
        res.status(205).json({
          name: "Reset Content",
          message:
            "Tells the user agent to reset the document which sent this request.",
          use_case: ["After a user submits a form, the form is reset."],
        });
        break;

      case "206":
        res.status(206).json({
          name: "Partial Content",
          message:
            "This response code is used when the Range header is sent from the client to request only part of a resource.",
          use_case: [
            "Send a partial response to a request.",
            "Downloading a file in chunks.",
          ],
        });
        break;

      case "207":
        res.status(207).json({
          name: "Multi-Status",
          message:
            "Conveys information about multiple resources, for situations where multiple status codes might be appropriate.",
          use_case: [],
        });
        break;
      case "208":
        res.status(208).json({
          name: "Already Reported",
          message:
            "The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.",
          use_case: ["Enumerating the members of a DAV binding."],
        });
        break;
      case "226":
        res.status(226).json({
          name: "IM Used",
          message:
            "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
          use_case: [
            "The response is a representation of the result of one or more instance-manipulations applied to the current instance.",
          ],
        });

        break;

      default:
        res.status(200).json({
          message: "This status code doesn't seem to be valid. If this is out of date open up a pull request to update this code.",
        });
    }
  } catch (err) {
    //.rate limit error
    res.status(429).json({
      name: "Too Many Requests",
      message:
        "You have made too many requests in a short period of time. Please try again later.",
    });
  }
}
