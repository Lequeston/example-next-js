const getById = (req, res) => {
  // req.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.end(res.query.id);
  res.json({yourId: req.query.id})
}