export let cart = [];

export function addToCart(productId) {
  let matchingProduct;

  cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
          matchingProduct = cartItem;
      }
  })

  if (matchingProduct) {
      matchingProduct.quantity += 1;
  } else {
      cart.push({
          productId: productId,
          quantity: 1,
      });
  }
}
