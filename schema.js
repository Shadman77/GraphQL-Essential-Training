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
        stores: [Store]!
    }
    
    input ProductInput {
        id: ID,
        name: String,
        description: String,
        price: Float,
        soldout: Boolean,
        stores: [StoreInput]!
    }

    type Store {
        store: String
    }

    input StoreInput {
        store: String
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }

    type Query {
        hello: String,
        getProducts(id: ID): Product 
    }
`);

export default schema;
