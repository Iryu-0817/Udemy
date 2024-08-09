const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");

//HackerNewsのデータ
let links = [
  {
    id: "link-0",
    description: "GtaphQlチュートリアルをUdemyで学ぶ",
    url: "www.udemy-graphql-tutorial.com",
  },
];

// リゾルバ関数
const resolvers = {
  Query: {
    info: () => "HackerNews Clone API",
    feed: () => links,
  },

  //ミュテーションのリゾルバ関数
  Mutation: {
    post: (parent, args) => {
      let idCount = links.length;
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
  },
};

//サーバーの起動
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`${url}でサーバーが起動しました`));
