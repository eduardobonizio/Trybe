export async function getCategories() {
  const endPoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories').then((data) => data.json());
  return endPoint;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  ).then((data) => data.json());
  return endPoint;
}

export async function getProduct(id) {
  const endPoint = await fetch(
    `https://api.mercadolibre.com/items/${id}`,
  ).then((data) => data.json());
  return endPoint;
}

export async function fazMap(obj) {
  const newObj = await obj.map((product) => {
    product.thumbnail = product.thumbnail.replace('-I.jpg', '-O.jpg');
    return product;
  });
  return newObj;
}

export async function fetchProducts(category, query) {
  try {
    const produtos = await getProductsFromCategoryAndQuery(category, query)
      .then((data) => data.results);
    const result = await fazMap(produtos);
    return result;
  } catch (error) {
    return undefined;
  }
}
