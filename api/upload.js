let latestImage = "";

export default function handler(req, res) {
  if (req.method === 'POST') {
    latestImage = req.body.image; // Expecting Base64 string
    return res.status(200).json({ success: true });
  }
  res.status(200).json({ image: latestImage });
}
