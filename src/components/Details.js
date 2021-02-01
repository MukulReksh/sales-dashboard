import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import MinusOutlined from "@ant-design/icons/MinusOutlined";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { product } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id, dispatch]);
  const { Content } = Layout;
  return (
    <Layout>
      <Content
        style={{
          margin: "90px 250px 0",
          overflow: "initial",
        }}
      >
        <div className="product-single-cont">
          {product.length >= 1
            ? product.map((item) => (
                <div key={item.id}>
                  <img
                    className="product-single-img"
                    src={item.img}
                    alt="product-info"
                  />
                  <div className="product-single-item-cont">
                    <h3 className="product-single-title">{item.name}</h3>
                    <h4 className="product-single-price">Rs {item.price}</h4>
                    <Button
                      onClick={() => setQty(qty + 1)}
                      icon={<PlusOutlined />}
                    />
                    <h4 className="product-amount">{qty}</h4>
                    <Button
                      onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                      icon={<MinusOutlined />}
                    />
                    <div>
                      <Button
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: { item, qty },
                          });
                          
                        }}
                        type="primary"
                        style={{ width: "100%", height: "40px" }}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </Content>
    </Layout>
  );
};

export default connect()(Details);
