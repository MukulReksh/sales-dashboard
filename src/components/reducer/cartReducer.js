const initState = {
  product: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initState, action) => {
  let finaladd;
  let findindex;
  if (action.type === "ADD_TO_CART") {
    const { item, qty } = action.payload;

    const check = state.product.find((el) => el.id === item.id);

    if (check) {
      if (qty !== item.amount) {
        const tprice = state.totalPrice + item.price * qty;
        const tqty = qty;
        item.amount = qty;

        return {
          ...state,
          product: [item],
          totalPrice: tprice,
          totalQuantity: tqty,
        };
      } else return state;
    } else {
      const tprice = state.totalPrice + item.price * qty;
      const tqty = state.totalQuantity + qty;
      item.amount = qty;
      return {
        ...state,
        product: [...state.product, item],
        totalPrice: tprice,
        totalQuantity: tqty,
      };
    }
  } else if (action.type === "FINAL_ADD") {
    finaladd = state.product.filter((el) => el.id === action.payload);
    findindex = state.product.findIndex((el) => el.id === action.payload);
    finaladd = state.product[findindex];
    finaladd.amount += 1;

    return {
      ...state,
      totalPrice: state.totalPrice + finaladd.price,
      totalQuantity: state.totalQuantity + 1,
    };
  } else if (action.type === "FINAL_DEC") {
    finaladd = state.product.filter((el) => el.id === action.payload);
    findindex = state.product.findIndex((el) => el.id === action.payload);
    finaladd = state.product[findindex];
    if (finaladd.amount > 1) {
      finaladd.amount -= 1;
    } else return state;

    return {
      ...state,
      totalPrice: state.totalPrice - finaladd.price,
      totalQuantity: state.totalQuantity - 1,
    };
  } else if (action.type === "REMOVE") {
    finaladd = state.product.filter((el) => el.id === action.payload);
    let tempdata = state.product.filter((el) => el.id !== action.payload);
    findindex = state.product.findIndex((el) => el.id === action.payload);
    finaladd = state.product[findindex];
    return {
      ...state,
      product: tempdata,
      totalPrice: state.totalPrice - finaladd.price * finaladd.qty,
      totalQuantity: state.totalQuantity - finaladd.amount,
    };
  } else if (action.type === "REMOVE_CART") {
    return { ...state, product: [], totalPrice: 0, totalQuantity: 0 };
  } else if (action.type === "SUMMARY") {
    return { ...state, product: [], totalPrice: 0, totalQuantity: 0 };
  } else return state;
};

export default cartReducer;
