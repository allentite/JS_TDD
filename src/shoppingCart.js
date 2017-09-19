function ShoppingCart(type) {
  MemberType = type;
}

// 撰寫邏輯
ShoppingCart.prototype.Calculate = function (cartPrice) {
   return cartPrice; 
  
}

ShoppingCart.prototype.MemberType;

module.exports = ShoppingCart;