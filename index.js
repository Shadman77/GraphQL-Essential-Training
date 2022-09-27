import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

// GraphQL Initial Data
const root = {
  hello: () => "Hello GraphQL",
  product: () => {
    return {
      id: 123,
      name: "Some Product",
      description: "Some description about the product",
      price: 34.99,
      soldout: false,
      stores: [{ store: "Store 1" }, { store: "Store 2" }],
    };
  },
};

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
