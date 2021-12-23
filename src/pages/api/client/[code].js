import rateLimit from "@/utils/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function clientStatus(req, res) {
  try {
    limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
    switch (req.query.code) {
      case "400":
        res.status(400).json({
          name: "Bad Request",
          message:
            "The request could not be understood by the server due to malformed syntax.",
          use_case: [
            "The request has an invalid syntax.",
            "The request has missing parameters.",
            "The request has an invalid parameter.",
          ],
        });
        break;
      case "401":
        res.status(401).json({
          name: "Unauthorized",
          message: "The request requires user authentication.",
          use_case: [
            "The request requires user authentication.",
            "The user is not authorized to access the resource.",
          ],
        });
        break;
      case "402":
        res.status(402).json({
          name: "Payment Required",
          message:
            "This code is reserved for future use. There is no standard convention exists.",
          use_case: ["The user must pay for the request."],
        });
        break;
      case "403":
        res.status(403).json({
          name: "Forbidden",
          message:
            "The server understood the request, but is refusing to fulfill it.",
          use_case: [
            "When the identity of the user is known but the user does not have access to the resource.",
            "The user is not authorized to access the resource.",
          ],
        });
        break;
      case "404":
        res.status(404).json({
          name: "Not Found",
          message:
            "The server has not found anything matching the request URI.",
          use_case: [
            "Alternative to 403 Forbidden to obscure the existence of a resource.",
            "The resource requested is not found.",
            "Unrecognized URL.",
          ],
        });
        break;
      case "405":
        res.status(405).json({
          name: "Method Not Allowed",
          message:
            "The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.",
          use_case: [
            "Resource is not allowed to be deleted, edited, or otherwise modified.",
            "The request method is not supported for the resource.",
          ],
        });
        break;
      case "406":
        res.status(406).json({
          name: "Not Acceptable",
          message:
            "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.",
          use_case: [
            "No content found matching the criteria.",
            "The user agent does not have the ability to display the content.",
          ],
        });
        break;
      case "407":
        res.status(407).json({
          name: "Proxy Authentication Required",
          message:
            "This code is similar to 401 Unauthorized, but it indicates that the client must first authenticate itself with the proxy.",
          use_case: [
            "The client must authenticate itself with the proxy.",
            "The proxy is refusing to connect.",
          ],
        });
        break;

      case "408":
        res.status(408).json({
          name: "Request Timeout",
          message:
            "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.",
          use_case: [
            "The server timed out waiting for the request.",
            "The user agent is slow in responding to the request.",
          ],
        });
        break;

      case "409":
        res.status(409).json({
          name: "Conflict",
          message:
            "The request could not be completed due to a conflict with the current state of the resource.",
          use_case: [
            "The resource has been modified since the user last retrieved it.",
            "The resource has been deleted since the user last retrieved it.",
          ],
        });
        break;

      case "410":
        res.status(410).json({
          name: "Gone",
          message:
            "The requested resource is no longer available at the server and no forwarding address is known.",
          use_case: [
            "The resource is no longer available.",
            "This condition is expected to be considered permanent.",
          ],
        });
        break;

      case "411":
        res.status(411).json({
          name: "Length Required",
          message:
            "The server refuses to accept the request without a defined Content-Length.",
          use_case: [
            "The request did not specify the length of its content, which is required by the requested resource.",
            "Content-Length is required for the request.",
          ],
        });
        break;

      case "412":
        res.status(412).json({
          name: "Precondition Failed",
          message:
            "The client has indicated preconditions in its headers which the server does not meet.",
          use_case: [
            "Data submitted by the user did not match the required data.",
          ],
        });
        break;

      case "413":
        res.status(413).json({
          name: "Request Entity Too Large",
          message:
            "The request is larger than the server is willing or able to process.",
          use_case: [
            "Uploading a resource that is too large.",
            "The user agent is syntactically correct but is exceeding the server's capacity.",
          ],
        });
        break;

      case "414":
        res.status(414).json({
          name: "Request-URI Too Long",
          message: "The URI provided was too long for the server to process.",
          use_case: [
            "The request URI exceeds the maximum length the server is willing to interpret.",
          ],
        });
        break;

      case "415":
        res.status(415).json({
          name: "Unsupported Media Type",
          message:
            "The request entity has a media type which the server or resource does not support.",
          use_case: [
            "Uploading a image that is not supported.",
            "Uploading a document that is not supported.",
          ],
        });
        break;

      case "416":
        res.status(416).json({
          name: "Requested Range Not Satisfiable",
          message:
            "The client has asked for a portion of the file, but the server cannot supply that portion.",
          use_case: [
            "The document does not have the range specified.",
            "The range specified is not valid for the document.",
          ],
        });
        break;

      case "417":
        res.status(417).json({
          name: "Expectation Failed",
          message:
            "The server cannot meet the requirements of the Expect request-header field.",
          use_case: [],
        });
        break;

      case "418":
        res.status(418).json({
          name: "I'm a teapot",
          message:
            "The server refuses the attempt to brew coffee with a teapot.",
          use_case: [],
        });
        break;

      case "421":
        res.status(421).json({
          name: "Misdirected Request",
          message:
            "The request was directed at a server that is not able to produce a response.",
          use_case: [],
        });
        break;

      case "422":
        res.status(422).json({
          name: "Unprocessable Entity",
          message:
            "The request was well-formed but was unable to be followed due to semantic errors.",
          use_case: [
            "Uploading a resource that is intended to be read by the server but fails to be read do to errors in the document syntax.",
          ],
        });
        break;

      case "423":
        res.status(423).json({
          name: "Locked",
          message: " The resource that is being accessed is locked.",
          use_case: [],
        });
        break;

      case "424":
        res.status(424).json({
          name: "Failed Dependency",
          message: "The request failed due to failure of a previous request.",
          use_case: ["When a chaining calls fails."],
        });
        break;

      case "425":
        res.status(425).json({
          name: "Too Early",
          message:
            "Indicates that the server is unwilling to risk processing a request that might be replayed.",
          use_case: ["The possibility of a replay attack is detected."],
        });
        break;

      case "426":
        res.status(426).json({
          name: "Upgrade Required",
          message:
            "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.",
          use_case: ["Requesting the client upgrade to a newer protocol."],
        });
        break;

      case "428":
        res.status(428).json({
          name: "Precondition Required",
          message: "The origin server requires the request to be conditional.",
          use_case: [
            "Prevent 'lost update' problem.",
            "When there is a potential for a conflict between two or more requests.",
          ],
        });
        break;

      case "429":
        res.status(429).json({
          name: "Too Many Requests",
          message:
            "The user has sent too many requests in a given amount of time (rate limiting).",
          use_case: [
            "When the user sends too many requests in a given amount of time.",
            "Rate limiting.",
          ],
        });
        break;

      case "431":
        res.status(431).json({
          name: "Request Header Fields Too Large",
          message:
            "The server is unwilling to process the request because its header fields are too large.",
          use_case: [
            "The request header fields are too large.",
            "Requesting the client to reduce the size of the request header fields.",
          ],
        });
        break;

      case "451":
        res.status(451).json({
          name: "Unavailable For Legal Reasons",
          message:
            "The server is denying access to the resource in response to a legal demand.",
          use_case: [
            "A resource that is censored by a government.",
            "Response to a legal demand.",
          ],
        });
        break;
      default:
        res.status(200).json({
          message:
            "This status code doesn't seem to be valid. If this is out of date open up a pull request to update this code.",
        });
    }
  } catch (err) {
    console.log(err);
  }
}
