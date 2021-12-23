export default async function handler(req, res) {
  // return all possible server codes with their names
  const codes = [
    { code: 500, name: "Internal Server Error" },
    { code: 501, name: "Not Implemented" },
    { code: 502, name: "Bad Gateway" },
    { code: 503, name: "Service Unavailable" },
    { code: 504, name: "Gateway Timeout" },
    { code: 505, name: "HTTP Version Not Supported" },
    { code: 506, name: "Variant Also Negotiates" },
    { code: 507, name: "Insufficient Storage" },
    { code: 508, name: "Loop Detected" },
    { code: 509, name: "Bandwidth Limit Exceeded" },
    { code: 510, name: "Not Extended" },
    { code: 511, name: "Network Authentication Required" },
  ];
  const data = codes.map(({name, code}) => {
    return {
      name,
      code,
      url: `${req.headers.host}/api/server/${code}`,
    };
  });
  res.status(200).json(data);
}
