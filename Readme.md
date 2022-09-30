# Mutation Create
mutation{
  createProduct(input: {
    name:"test product",
    description: "test description",
    price:77.7,
    soldout:false,
    stores: [
      {
        store:"store1"
      },
      {
        store: "store2"
      }
    ],
    inventory: 77,
    soldoutEnum:ONSALE
  }){
    name,
    id,
    inventory,
    soldoutEnum
  }
}