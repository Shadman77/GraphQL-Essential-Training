import { buildSchema } from "graphql";

// What is supported by GraphQL, literaly a schema for GraphQL
// See how it can be nested and positioning of child relative to parent does not matter
const schema = buildSchema(`
    type Product{
        id: ID,
        name: String,
        description: String,
        price: Float,
        soldout: Boolean,
        stores: [Store]
    }    

    type Store {
        store: String
    }

    type Query {
        hello: String,
        product: Product
    }
`);

export default schema;
