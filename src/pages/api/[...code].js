import { response } from "@/data/response";

function getResponse(code) {
  // attempt to get a response
  return response[code];
}


/**
 * @description Returns a response code with the given message.
 * @param {request} req 
 * @param {response} res 
 * @returns 
 */
export default function handler(req, res) {
  // grab the desired response code
  const code = parseInt(req.query.code[0]);

  const responseData = getResponse(code);

  if (!responseData) {
    return res.status(404).json({ message: "Invalid response code: " + code });
  }

  // if there is a request body.
  // respond with the request body
  const body = req.body;

  if (body) {
    console.log(body);
    return res.status(responseData.status).send(req.body);
  }
  // respond with the desired response status and its description
  return res.status(responseData.status).json(responseData);
}
