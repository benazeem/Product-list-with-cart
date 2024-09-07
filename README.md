# Frontend Mentor - Product List with Cart Solution

This repository showcases my solution to the [Product List with Cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). These challenges are designed to help developers enhance their skills by building realistic, real-world projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Development Process](#development-process)
  - [Built With](#built-with)
  - [Key Learnings](#key-learnings)
  - [Future Improvements](#future-improvements)
  - [Resources](#resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

In this project, users should be able to:

- Add and remove items from the cart
- Adjust the quantity of items in the cart
- View an order confirmation modal upon clicking "Confirm Order"
- Reset their cart by selecting "Start New Order"
- Experience a responsive design that adapts to different screen sizes
- See hover and focus states for all interactive elements

### Screenshot

*(Add your screenshot here)*

### Links

- [Solution URL](#) (add your solution link here)
- [Live Site URL](https://productlist-with-cart.netlify.app/)

## Development Process

### Built With

- [React.js](https://reactjs.org/) – JavaScript library for building user interfaces
- Custom CSS modules – Scoped CSS to maintain component-level styling
- Flexbox and CSS Grid – For responsive, flexible layout design
- Mobile-first workflow – Ensuring a seamless experience across devices

### Key Learnings

This project allowed me to:

- Leverage `useReducer` and the Context API for efficient state management across the app.
- Implement scoped styling through CSS modules to enhance modularity and readability.

```js
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.payload] };
    // additional logic...
  }
};
```

### Future Improvements

While the project is complete, there are a few areas I plan to refine:

- **Code readability**: Improve modularization and incorporate best practices for cleaner, more maintainable code.
- **Performance optimization**: Implement more efficient state management patterns for larger-scale applications.
- **Accessibility**: Focus on enhancing accessibility, ensuring that the UI is user-friendly for a broader audience.
- Will deepen my understanding of structuring and organizing CSS using BEM (Block Element Modifier) conventions, improving both maintainability and scalability of styles.


### Resources

- [React.js Documentation](https://react.dev/reference/react) – Comprehensive guide for React hooks and state management.
- [W3Schools CSS Documentation](https://www.w3schools.com/css/) – Excellent reference for CSS fundamentals and advanced topics.

## Author

- Frontend Mentor - [@benazeem](https://www.frontendmentor.io/profile/benazeem)
- LinkedIn - [@devazeem](https://www.linkedin.com/in/devazeem/)

## Acknowledgments

I would like to extend my appreciation to the Frontend Mentor community for providing a collaborative platform that inspires continual learning and improvement. The official documentation for React and CSS was instrumental in helping me implement best practices, while community feedback played a significant role in refining the solution. 
