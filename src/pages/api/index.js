import { client_error_codes } from "./client";
import { information_codes } from "./information";
import { server_error_codes } from "./server";
import { success_codes } from "./success";

export default async function handler(req, res) {
  // all possible status codes grouped by category
  const statusCodes = {
    client_error_codes: client_error_codes.map(({ code, name }) => {
      return {
        name,
        code,
        url: `https://${req.headers.host}/api/client/${code}`,
      };
    }),
    information_codes: information_codes.map(({ code, name }) => {
      return {
        name,
        code,
        url: `https://${req.headers.host}/api/information/${code}`,
      };
    }),
    server_error_codes: server_error_codes.map(({ code, name }) => {
      return {
        name,
        code,
        url: `https://${req.headers.host}/api/server/${code}`,
      };
    }),
    success_codes: success_codes.map(({ code, name }) => {
      return {
        name,
        code,
        url: `https://${req.headers.host}/api/success/${code}`,
      };
    }),
  };

  res.status(200).json(statusCodes);
}
