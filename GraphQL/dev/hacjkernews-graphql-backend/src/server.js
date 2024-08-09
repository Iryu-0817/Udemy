const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// リゾルバ関数
const resolvers = {
  Query: {
    info: () => "HackerNews Clone API",
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
  },

  //ミュテーションのリゾルバ関数
  Mutation: {
    post: (parent, args, context) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      });
      return newLink;
    },
  },
};

//サーバーの起動
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  // prismaがリゾルバ関数内で利用できるようになる
  context: () => ({ prisma }),
});

server
  .listen()
  .then(({ url }) => console.log(`${url}でサーバーが起動しました`));
