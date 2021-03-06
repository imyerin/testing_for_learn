const {
    User
} = require('../models/user');
let auth = (req, res, next) => {
    //인증처리 하는곳
    //클라이언트 쿠카에서 토큰 가져오기
    let token = req.cookies.x_auth;
    //토큰 복호화 후 유저찾기

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({
            isAuth: false,
            error: true
        })
        req.token = token;
        req.user = user;
        next();
    })
    //유저가 있으면 인증 승인
    //유저가 없으면 인증 거부

}

module.exports = {
    auth
};
