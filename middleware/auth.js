export default function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN',
    });
  }

  next();
}