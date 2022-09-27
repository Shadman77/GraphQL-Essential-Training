mutation {
  createProduct(input: {
    name:"Test Product",
    description : "Test Description",
    price: 37.37,
    soldout:false,
    stores:[
     {store: "store1"},
      {store: "store2"}
    ]
  }){
    name, price
  }
}