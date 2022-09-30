import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import resolvers from "./data/resolvers";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

// GraphQL Initial Data
const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, //GraphQL GUI
  })
);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}/graphql`);
});
