const initState = {
  purchaseList: [
    {
      id: 1,
      name: "I phone 11 pro max 256gb",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg",
      price: 135000,
      amount: 1,
    },
    {
      id: 2,
      name: "I phone 12 pro max 256gb",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg",
      price: 165000,
      amount: 1,
    },
    {
      id: 3,
      name: "One Plus 8 pro 128gb",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg",
      price: 41000,
      amount: 1,
    },
  ],

  stocklist: [
    { id: 1, name: "I phone 11 pro max 256gb", amount: 15 },
    { id: 2, name: "I phone 12 pro max 256gb", amount: 17 },
    { id: 3, name: "One Plus 8 pro 128gb", amount: 19 },
  ],
};

const PurchaseReducer = (state = initState, action) => {
  //mentioned in salesmenu under the second model item submit input form
  // if (action.type === "MANAGE_STOCK"){

  // }
  return state;
};

export default PurchaseReducer;
