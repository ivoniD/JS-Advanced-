function factory(library, orders) {
  let products = [];
  for (const order of orders) {
    let product = order.template;
    for (const part of order.parts) {
      product[part] = library[part];
    }
    products.push(product);
  }
  return products;
}
