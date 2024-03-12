const productRouter = require("./product.router")
const homeRouter = require("./home.router")
const searchRouter = require("./search.router")
const cartRouter = require("./cart.router")
const categoryMiddleware = require("../../middlewares/client/category.middleware")
const cartMiddleware = require("../../middlewares/client/cart.middleware")
module.exports = (app) => {
  app.use(categoryMiddleware.category)
  app.use(cartMiddleware.cartId)
  app.use("/", homeRouter)
  app.use("/products", productRouter)
  app.use("/search", searchRouter)
  app.use("/cart", cartRouter)
}