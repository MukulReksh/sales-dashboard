const initState = {
  summaryData: [],
};

const Summaryreducer = (state = initState, action) => {
  if (action.type === "SUMMARY") {
    const { product, inputData } = action.payload;
    let productData = { ...inputData, product };

    return {
      ...state,
      summaryData: [...state.summaryData, productData],
    };
  } else return state;
};

export default Summaryreducer;
