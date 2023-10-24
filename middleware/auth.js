const jwt = require("jsonwebtoken");

//Authentication middleware
exports.requireLogin = (req, res, next) => {
    try {
        if (req.headers.authorization) {//if authorization is true: request token
            const token = req.headers.authorization.split(" ")[1];
            // Verify token
            const decode = jwt.verify(token, process.env.JWT_SECRET);
           //Attach token to request
            req.user = decode;
            next();
        } else {
            return res.status(400).json({ error: "Unauthorized" });
        }
    } catch (err) {
        console.log("Something went wrong");
    }
}