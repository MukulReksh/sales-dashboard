import React from "react";
import "antd/dist/antd.css";
import "./app.css";
import Salesmenu from "./Salesmenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Productlist from "./Productlist";
import Details from "./Details";
import Summary from "./Summary";
import SummarySaleOrder from "./SummarySaleOrder";
import Purchaselist from "./Purchaselist";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Salesmenu />
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route exact path="/purchaselist" component={Purchaselist} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/summary" component={Summary} />
          <Route
            exact
            patch="/summary/saleorder"
            component={SummarySaleOrder}
          />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
