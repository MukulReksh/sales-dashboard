import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";

const Summary = () => {
  const { Content } = Layout;
  const { summaryData } = useSelector((state) => state.Summaryreducer);

  return (
    <Layout>
      <Content
        style={{
          margin: "90px 250px 0",
          overflow: "initial",
        }}
      >
        <h2>Here is the all order details</h2>

        <div className="ui segment">
          {summaryData.length >= 1
            ? summaryData.map((item, index) => (
                <div key={item.Fullname} className="ui segment">
                  {console.log(item.product)}
                  <h2>
                    Order id: {Math.floor(Math.random(0, 10) * 500000000)}
                  </h2>
                  <div className="summary-input">
                    <label>Deliever to:{item.Fullname},</label>
                    <label>Email id:{item.Email},</label>
                    <label>Phone:{item.Phone},</label>
                    <label>Address:{item.Address}</label>
                  </div>
                  <ul>
                    {item.product.map((details) => (
                      <>
                        <li>
                          <h4>{details.name}</h4>
                          <h5>Price Rs{details.price}</h5>
                          <h5>Quantity{details.amount}</h5>
                        </li>
                        <br />
                      </>
                    ))}
                  </ul>
                </div>
              ))
            : null}
        </div>
      </Content>
    </Layout>
  );
};

export default Summary;
