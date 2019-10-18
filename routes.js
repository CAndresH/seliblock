const routes = require('next-routes')();

routes
  .add('/products', '/products')
  .add('/vows/new', '/vows/new')
  .add('/vows/:address', '/vows/show')
  .add('/about', '/about');
  // .add('/#vows','/');
module.exports = routes;