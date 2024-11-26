const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { APP_SECRET } = require("../utils");

// ユーザーの新登録のリゾルバー
async function signup(parent, args, context, info) {
  // パスワードのハッシュ化
  const password = await bcrypt.hash(args.password, 10);

  // ユーザーの作成
  const user = await context.prisma.user.create({
    data: {
      ...args,
      password,
    },
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

// ユーザーのログイン
async function login(parent, args, context) {
  const user = await context.prisma.user.findUnique({
    where: {
      email: args.email,
    },
  });

  if (!user) {
    throw new Error("ユーザーが見つかりません");
  }

  //   パスワードの検証
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("無効なパスワードです");
  }

  //   パスワードが正しい場合
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

//ニュースを投稿するリゾルバー
async function post(parent, args, context) {
  const { userId } = context;

  return await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: context.userId } },
    },
  });
}

module.exports = {
  signup,
  login,
  post,
};
