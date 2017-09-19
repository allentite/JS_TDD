function ShoppingCart(type) {
  this.MemberType = type;
}

// 撰寫邏輯
ShoppingCart.prototype.Calculate = function (cartItems) {
  var ItemNumber = 0;
  var TotalPrice = 0;
  cartItems.forEach(function (item) {
    ItemNumber++;
    TotalPrice += item;
  });
  if (this.MemberType == "VIP" && TotalPrice >= 500) {
    return TotalPrice * 0.8;
  } else {
    if (ItemNumber > 3 && TotalPrice >= 1000) {
      return TotalPrice * 0.85;
    } else {
      return TotalPrice;
    }

  }
}

ShoppingCart.prototype.MemberType;

module.exports = ShoppingCart;