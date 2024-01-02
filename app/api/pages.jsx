let accessCount = 0;

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ count: accessCount });
  } else if (req.method === 'POST') {
    accessCount += 1;
    res.status(200).json({ count: accessCount });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};