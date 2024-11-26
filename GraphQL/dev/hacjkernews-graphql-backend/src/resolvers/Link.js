// 誰によって投稿されたかの情報を取得するためのリゾルバー
function postedBy([parent, args, context]) {
  return context.prisma.link
    .findUnique({
      where: {
        id: parent.id,
      },
    })
    .postedBy();

  module.exports = {
    postedBy,
  };
}
