export default async function handler(req, res) {
  // the code requested by the user
  const requestCode = req.query.code;
  const url = `${process.env.API_URL}/api/success/${requestCode}`;
  console.log(url);
  if (requestCode < 200) {
    // not implemented yet
    // return not implemented yet http response
    res.status(501).json({
      message: "not implemented yet",
    });
  }
  if (requestCode < 300) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const code = await response.status;
      res.status(code).json(data);
    } catch {
      res.status(500).json({
        message: "error",
      });
    }
  }
  if (requestCode < 400) {
    // not implemented yet

    res.status(501).json({
      message: "not implemented yet",
    });
  }
  if (requestCode < 500) {
    // not implemented yet
    res.status(501).json({
      message: "not implemented yet",
    });
  }
}
