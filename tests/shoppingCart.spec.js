var mocha = require('mocha');
var chai = require('chai');

var should = chai.should();

var ShoppingCart = require('../src/shoppingCart');

// 撰寫測試
describe('ShoppingCart', () => {
  describe('Calculator', () => {
    it('購物車結帳，買多少錢就付多少錢', () => {
      // Arrange
      var cartPrice = 100;
      var expected = 100;
      var actual = 0;
      var shoppingCart = new ShoppingCart();
      
      // Act
      actual = shoppingCart.Calculate(cartPrice);
      
      // Assert
      actual.should.equal(expected);
    });
  });
  
});