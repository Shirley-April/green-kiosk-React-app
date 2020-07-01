import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return <h1>Hello SHirley</h1>;
}
class MumMboga extends Component {
  constructor() {
    this.state = {
      products: [],
      carts: [],
      orders: [],
      customers: [],
    };
  }

  addProduct(productId, name, price, quantity) {
    let product = {
      productId: productId,
      name: name,
      price: price,
      quantity: quantity,
    };
    this.products.push(product);
  }

  getProducts(productId) {
    for (var i = 0; i < this.products.length; i++) {
      let farm = this.products[i];
      if (product.productId === productId);
      {
        return product;
      }
    }
  }

  removeProduct(productId) {
    let product = this.getProduct(productId);
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  updateProduct(productId, name, price, quantity) {
    let product = {
      productId: productId,
      name: name,
      price: price,
      quantity: quantity,
    };
    this.products.push(product);
  }
  getProductCatalog() {
    for (var i = 0; i < this.carts.length; i++) {
      let product = this.product[1];
      let productsCatalog = {
        product: productname,
        quantity: productquantity,
        //       this.productCatalog.push(productsCatalog)
      };
      return this.productCatalog;
    }
  }

  addToCart(cartId, product, orderQuantity, customerId) {
    let item = {
      cartId: cartId,
      product: product,
      orderQuantity: orderQuantity,
      customerId: customerId,
    };
    this.carts.push(item);
  }
  getFromCart(productId) {
    for (var i = 0; i < this.carts.length; i++) {
      let item = this.carts[i];
      if (item.productId === productId);
      {
        return item;
      }
    }
  }

  removeFromCart(productId) {
    let product = this.getProduct(productId);
    let index = this.carts.indexOf(product);
    this.carts.splice(index, 1);
  }
  createOrder(orderId, cartId) {
    let order = (orderId, cardId);
    this.orders.push(order);
  }
  cancelOrder(orderId) {}
  calculateOrderCost() {}
  getOrder(orderId) {
    for (var i = 0; i < this.customers.length; i++) {
      let orders = this.orders[i];
      if (orders.ordersId === ordersId);

      return orders;
    }
  }

  addCustomer(customerId, name, email, address) {
    let customer = {
      customerId: customerId,
      name: name,
      email: email,
      address: address,
    };
    this.customers.push(customer);
  }

  getCustomer(customerId) {
    for (var i = 0; i < this.customers.length; i++) {
      let customer = this.customers[i];
      if (customer.customerId === customerId);
      {
        return customer;
      }
    }
  }
  removeCustomer(customerId) {
    let customer = this.getCustomer(customerId);
    let index = this.customers.indexOf(customer);
    this.customers.splice(index, 1);
  }
  updateCustomer(customerId, name, email, address) {
    let customer2 = {
      customerId: customerId,
      name: name,
      email: email,
      address: address,
    };
    this.customers.push(customer2);
  }
}
var pomegranate = new MumMboga();
pomegranate.addProduct(23, "Pomegranate", "150", 3);
pomegranate.addProduct(22, "cucumber", "15", 7);

console.log(pomegranate.products);

var onion = new MumMboga();
onion.updateProduct(10, "onion", "50", 6);
onion.updateProduct(10, "pepper", "50", 3);
console.log(onion.products);

var tomatoes = new MumMboga();
tomatoes.addToCart(14, "Tomatoes", 34, 37);
console.log(tomatoes.carts);

var customer = new MumMboga();
customer.addCustomer(254, "Lily", "lily@hotmail.com", 147);
console.log(customer.customers);

var customer = new MumMboga();
customer.addCustomer(255, "Njambi", "njambi@hotmail.com", 144);
console.log(customer.customers);

export default App;
