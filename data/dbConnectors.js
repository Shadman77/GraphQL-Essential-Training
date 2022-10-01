// Password for mongodb
// 6oWJYdJqr0l0ILPf

import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://shadman_saif:6oWJYdJqr0l0ILPf@data.vcbev.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const widgetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  soldout: {
    type: String,
  },
  inventory: {
    type: String,
  },
  stores: {
    type: Array,
  },
});

const Widgets = mongoose.model("widgets", widgetSchema);

export { Widgets };
