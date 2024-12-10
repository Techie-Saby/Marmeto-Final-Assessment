# Marmeto-Final-Assessment


# Cart Drawer Application

A simple and interactive **Cart Drawer** implementation built using **HTML**, **CSS**, and **JavaScript**. This application dynamically fetches product data, allows users to manage their cart, and includes recommendations for adding new items.

---

## Features

- **Cart Drawer Toggle**: Open and close the cart drawer with a smooth sliding animation.
- **Dynamic Product Data**: Products and recommendations are fetched from a mock API.
- **Add to Cart**: Add products to the cart from the product list or recommendations section.
- **Quantity Management**: Increase or decrease the quantity of items directly in the cart.
- **Remove Items**: Remove unwanted items from the cart with a single click.
- **Cart Summary**: Displays the total price, discount (if applicable), and final amount.
- **Responsive Design**: Fully responsive and mobile-friendly layout.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cart-drawer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cart-drawer
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

---

## Usage

1. Open the cart drawer by clicking the "Your Bag" button.
2. Add items to your cart from the recommendations section.
3. Adjust quantities or remove items as needed.
4. View the cart summary for a breakdown of your order.

---

## File Structure

```plaintext
cart-drawer/
│
├── index.html         # Main HTML structure
├── styles.css         # CSS for styling the application
├── script.js          # JavaScript logic for functionality
└── README.md          # Documentation file
```

## Key Functions

### `fetchProducts()`
Fetches product data from a mock API and initializes the product list and recommendations.

### `renderCartItems()`
Displays the current cart items in the cart drawer.

### `renderRecommendations()`
Displays product recommendations with "Add to Cart" buttons.

### `updateCartSummary()`
Calculates and updates the cart totals, including discounts.

### `attachCartListeners()`
Adds event listeners for quantity adjustments and item removal in the cart.

### `attachRecommendationListeners()`
Adds event listeners to "Add to Cart" buttons in the recommendations section.

---

## Technologies Used

- **HTML**: Markup structure for the application.
- **CSS**: Styling, animations, and responsive design.
- **JavaScript**: Dynamic content, event handling, and logic.

---

## API Reference

This project uses a mock API for product data:
```
https://mocki.io/v1/539c3a78-25e4-4fc6-8b35-6f1550d2b7c6
```

---

## Customization

Feel free to modify and extend the project:

- **Styling**: Update `styles.css` to match your design preferences.
- **API Integration**: Replace the mock API with your real product API.
- **Features**: Add new features like user authentication, checkout process, etc.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

---

## Contact

For questions or suggestions, reach out at **sabariwork2024@gmail.com**. 

---

Enjoy building with **Cart Drawer Application**! 🎉
