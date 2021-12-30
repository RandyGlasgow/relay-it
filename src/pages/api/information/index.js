export const information_codes = [
  { code: 100, name: "Continue" },
  { code: 101, name: "Switching Protocols" },
  { code: 102, name: "Processing" },
  { code: 103, name: "Early Hints" },
];

export default function handler(req, res) {
  const data = information_codes.map(({ code, name }) => {
    return {
      name,
      code,
      url: `https://${req.headers.host}/api/information/${code}`,
    };
  });
  res.status(200).json(data);
}
