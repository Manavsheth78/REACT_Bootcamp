const ErrorMessage = ({ items }) => {
  // let foodItems = ["Dal", "Rice", "Roti", "Milk", "Green Vegetable"];

  return items.length === 0 && <h3>No food items</h3>;
};

export default ErrorMessage;
