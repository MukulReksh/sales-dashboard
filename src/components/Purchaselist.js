import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";

const Purchaselist = () => {
  const { stocklist } = useSelector((state) => state.PurchaseReducer);
  const { Content } = Layout;

  return (
    <Layout>
      <Content
        style={{
          margin: "90px 250px 0",
          overflow: "initial",
        }}
      >
        <div>
          <h3 style={{ textAlign: "center" }}>Stock Info</h3>
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Stock Left!</th>
              </tr>
            </thead>
            <tbody>
              {stocklist.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Content>
    </Layout>
  );
};

export default Purchaselist;
