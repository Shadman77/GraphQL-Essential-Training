class Product {
  constructor(id, { name, description, price, soldout, stores }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores;
  }
}

const productDatabase = {};

const resolvers = {
  getProducts: ({ id }) => {
    return new Product(id, productDatabase[id]);
  },
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    productDatabase["id"] = input; //Add to the memory
    return new Product(id, input); // return a new Product, I guess syntax of graphql
  },
};

export default resolvers;
