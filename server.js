const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Simulated data store
  let accessCount = 0;

  // API endpoint to get the access count
  server.get('/api/access-count', (req, res) => {
    res.json({ count: accessCount });
  });

  // Increment access count on every request
  server.use('*', (req, res, next) => {
    accessCount++;
    next();
  });

  // Next.js handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});