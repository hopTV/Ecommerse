// add cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// delete item cart

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
