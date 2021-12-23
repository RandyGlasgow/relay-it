export default async function handler(req, res) {
  // return all possible success codes with their names

  const codes = [
    { code: 200, name: "OK" },
    { code: 201, name: "Created" },
    { code: 202, name: "Accepted" },
    { code: 203, name: "Non-Authoritative Information" },
    { code: 204, name: "No Content" },
    { code: 205, name: "Reset Content" },
    { code: 206, name: "Partial Content" },
    { code: 207, name: "Multi-Status" },
    { code: 208, name: "Already Reported" },
    { code: 226, name: "IM Used" },
  ];
  const data = codes.map((code) => {
    return {
      name: code.name,
      code: code.code,
      url: `${process.env.API_URL}/api/success/${code.code}`,
    };
  });
  res.status(200).json(data);
}
