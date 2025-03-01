import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No Token Provided" });
  }

  try {
    // Split "Bearer token_value" and get token_value
    const bearerToken = token.split(" ")[1];

    if (!bearerToken) {
      return res.status(401).json({ message: "Invalid Token Format" });
    }

    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token Provided" });
  }
};

export default authMiddleware;



// import jwt from 'jsonwebtoken';

// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ message: 'Access Denied: No Token Provided'});
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next(); // Proceed to the next middleware or route handler
//     } catch (error) {
//         return res.status(401).json({ message: 'Invalid Token Provided'});
//     }
// }

// export default authMiddleware;