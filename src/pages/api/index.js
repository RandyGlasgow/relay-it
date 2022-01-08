import { client_error_codes } from "./client";
import { information_codes } from "./information";
import { server_error_codes } from "./server";
import { success_codes } from "./success";

export default async function handler(req, res) {
  res.send({ message: "Welcome to the relay-it API!" });
}
