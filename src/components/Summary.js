import React from "react";
import { Layout } from "antd";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
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
        <Breadcrumb style={{ fontSize: "40px", border: "solid 2px black" }}>
          <Breadcrumb.Item>
            <Link to="/summary/saleorder">
              Sale Orders({summaryData.length})
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/summary/purchaseorders">Purchase Orders</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Content>
    </Layout>
  );
};

export default Summary;
