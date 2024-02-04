// Middleware for handling auth
const { Admin } = require("../db")
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let adminUserName=req.headers.username;
    let adminPassword=req.headers.password;

    Admin.findOne({
        username:adminUserName,
        password:adminPassword
    }).then({function(user){
        if(user){next();}
        else{
            res.status(404).json({msg:"Admin does not exists"});
        }
    }
    });
}

module.exports = adminMiddleware;