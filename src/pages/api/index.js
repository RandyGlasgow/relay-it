import { client_error_codes } from "./client";
import { server_error_codes } from "./server";
import { success_codes } from "./success";

export default async function handler(req, res) {
  // all possible status codes grouped by category
  const statusCodes = {
    success_codes: success_codes,
    server_error_codes: server_error_codes,
    client_error_codes: client_error_codes,
  };

  res.status(200).json(statusCodes);
}
