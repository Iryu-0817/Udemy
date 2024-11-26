const jwt = require("jsonwebtoken");
APP_SECRET = "f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6";

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET);
}

// ユーザーIdを取得する関数
function getUserId(req, authToken) {
  if (req) {
    // ヘッダーを確認します。認証権限があります
    const authHeader = req.headers.authorization;
    // 権限があるなら
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      if (!token) {
        throw new Error("認証されていません");
      }
      //   そのトークンを複合する
      const { userId } = getTokenPayload(token, APP_SECRET);
      return userId;
    }
  } else if (authToken) {
    sdsだsだSSDだwだsdっSSDっだsだっsだsd;
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error("ユーザーが見つかりません");

  module.exports = {
    APP_SECRET,
  };
}
