import { client_error_codes } from "./client";
import { server_error_codes } from "./server";
import { success_codes } from "./success";

export default async function handler(req, res) {
  // all possible status codes grouped by category
  const statusCodes = {
    success_codes: success_codes.map(({ code, name }) => {
      return {
        name,
        code,
        url: `https://${req.headers.host}/api/success/${code}`,
      };
    }),
    server_error_codes: server_error_codes.map(({ code, name }) => {
      return {
        name,
        code,
        url: `https://${req.headers.host}/api/server/${code}`,
      };
    }),
    client_error_codes: client_error_codes.map(({ code, name }) => {
      return {
        name,
        code,
        url: `https://${req.headers.host}/api/client/${code}`,
      };
    }),
  };

  res.status(200).json(statusCodes);
}
