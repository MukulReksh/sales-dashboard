import React from "react";
import { Card } from "antd";
import { Button } from "antd";
import EyeOutlined from "@ant-design/icons/EyeOutlined";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Layout } from "antd";

const Productlist = ({ products }) => {
  const { Meta } = Card;
  const { Content } = Layout;

  return (
    <Layout>
      <Content
        style={{
          margin: "90px 250px 0",
          overflow: "initial",
          height: "100%",
        }}
      >
        <div className="product-list-items">
          {products.map((item) => (
            <Card
              key={item.id}
              hoverable
              style={{ width: "240px" }}
              cover={
                <img className="product-img" alt="example" src={item.img} />
              }
            >
              <Meta title={item.name} description={`Rs ${item.price}`} />
              <Link to={`/details/${item.id}`}>
                <Button
                  icon={<EyeOutlined style={{ fontSize: "15px" }} />}
                  className="cart-btn"
                  type="primary"
                >
                  View Details
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { products: state.productReducer.products };
};

export default withRouter(connect(mapStateToProps)(Productlist));
