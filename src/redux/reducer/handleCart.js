const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product is Already Exist
      const isItem = state.find((item) => item.id === product.id);
      if (isItem) {
        // Increase the Quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const isCheckItem = state.find((item) => item.id === product.id);
      if (isCheckItem.qty === 1) {
        return state.filter((item) => item.id !== isCheckItem.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
