import rateLimit from "@/utils/rate-limit";

export const client_error_codes = [
  { code: 400, name: "Bad Request" },
  { code: 401, name: "Unauthorized" },
  { code: 402, name: "Payment Required" },
  { code: 403, name: "Forbidden" },
  { code: 404, name: "Not Found" },
  { code: 405, name: "Method Not Allowed" },
  { code: 406, name: "Not Acceptable" },
  { code: 407, name: "Proxy Authentication Required" },
  { code: 408, name: "Request Timeout" },
  { code: 409, name: "Conflict" },
  { code: 410, name: "Gone" },
  { code: 411, name: "Length Required" },
  { code: 412, name: "Precondition Failed" },
  { code: 413, name: "Payload Too Large" },
  { code: 414, name: "URI Too Long" },
  { code: 415, name: "Unsupported Media Type" },
  { code: 416, name: "Range Not Satisfiable" },
  { code: 417, name: "Expectation Failed" },
  { code: 418, name: "I'm a teapot" },
  { code: 421, name: "Misdirected Request" },
  { code: 422, name: "Unprocessable Entity" },
  { code: 423, name: "Locked" },
  { code: 424, name: "Failed Dependency" },
  { code: 425 , name: "Too Early" },
  { code: 426, name: "Upgrade Required" },
  { code: 428, name: "Precondition Required" },
  { code: 429, name: "Too Many Requests" },
  { code: 431, name: "Request Header Fields Too Large" },
  { code: 451, name: "Unavailable For Legal Reasons" },
];
export default async function clientCodes(req, res) {

  const data = client_error_codes.map(({ code, name }) => {
    return {
      name,
      code,
      url: `https://${req.headers.host}/api/client/${code}`,
    };
  });
  res.status(200).json(data);
}
