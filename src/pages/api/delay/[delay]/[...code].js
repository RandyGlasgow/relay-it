import handler from "@/pages/api/[...code]";

/**
 * @description handles the case where a user would like a delay to be added to the response.
 */

export default function Delay(req, res) {
  // grab the time delay from the request
  const delay = parseInt(req.query.delay);

  // await the delay and respond to the request
  setTimeout((fn) => {
    handler(req, res);
  }, delay);
}
