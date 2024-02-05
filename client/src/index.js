/* eslint-disable react/button-has-type */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactDom from 'react-dom/client';

function Product({ name, price, quantity }) {
  return React.createElement('li', {
    className: 'product',
    children: [
      React.createElement('div', {
        className: 'product-details',
        children: [
          React.createElement('h3', null, name),
          React.createElement('p', { className: 'price' }, price),
          React.createElement('p', { className: 'quantity' }, quantity),
          React.createElement('div', {
            className: 'actions product-actions',
            children: [
              React.createElement('button', { className: 'add-to-cart' }, 'Add to Cart'),
              React.createElement('button', { className: 'edit' }, 'Edit'),
              React.createElement('button', {
                className: 'delete-button',
                children: [React.createElement('span', null, 'X')],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function App() {
  return React.createElement('div', {
    id: 'app',
    children: [
      React.createElement('header', { children: [React.createElement('h1', null, 'The Shop')] }),
      React.createElement('main', {
        children: [
          React.createElement('div', {
            className: 'product-listing',
            children: [
              React.createElement('h2', null, 'Product'),
              React.createElement('ul', {
                className: 'product-list',
                children: [
                  React.createElement(Product, { name: 'super product', price: '99999€', quantity: 'unlimited' }),
                  React.createElement(Product, { name: 'super product2', price: '1000000', quantity: '50000' }),
                  React.createElement(Product, { name: 'super product3', price: '1231312', quantity: '9999' }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

const rootElement = document.getElementById('root');
ReactDom.createRoot(rootElement).render(React.createElement(App));
