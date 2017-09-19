function ShoppingCart(type) {
  MemberType = type;
}

// 撰寫邏輯
ShoppingCart.prototype.Calculate = function (cartPrice) {
  if (MemberType == "VIP" && cartPrice >= 500) { return cartPrice * 0.8;}
  else { return cartPrice; }
   
  
}

ShoppingCart.prototype.MemberType;

module.exports = ShoppingCart;