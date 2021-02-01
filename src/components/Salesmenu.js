import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import SubnodeOutlined from "@ant-design/icons/SubnodeOutlined";
import FolderAddOutlined from "@ant-design/icons/FolderAddOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import DashboardOutlined from "@ant-design/icons/DashboardOutlined";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import MinusOutlined from "@ant-design/icons/MinusOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import { Button, Modal } from "antd";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";
import { connect, useSelector, useDispatch } from "react-redux";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";

const Salesmenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSummaryVisible, setisSummaryVisible] = useState(false);
  const [Fullname, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [item, setItem] = useState("");
  const { Header, Sider } = Layout;
  const { totalQuantity } = useSelector((state) => state.cartReducer);
  const { product } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const handleInputName = (e) => {
    setFullName((e.target.name = e.target.value));
  };
  const handleInputEmail = (e) => {
    setEmail((e.target.name = e.target.value));
  };
  const handleInputAdress = (e) => {
    setAddress((e.target.name = e.target.value));
  };
  const handleInputPhone = (e) => {
    setPhone((e.target.name = e.target.value));
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (
      Fullname.length < 1 ||
      Email.length < 1 ||
      Phone.length < 1 ||
      Address.length < 1
    ) {
      alert("Kindly fill details to proceed");
    } else {
      const inputData = {
        Fullname: Fullname,
        Email: Email,
        Address: Address,
        Phone: Phone,
      };

      dispatch({ type: "SUMMARY", payload: { product, inputData } });
      setFullName("");
      setPhone("");
      setEmail("");
      setAddress("");
      alert("Order Suceessful,Kindly check summary page");
      dispatch({
        type: "MANAGE_STOCK",
        payload: { item }, //item is coming from useeffect
      });
      setisSummaryVisible(false);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    product.map((item) => {
      setItem(item);
      return item;
    });
  });

  const handleOk = () => {
    setIsModalVisible(false);
    if (product.length < 1) {
      alert("There is no item in the Cart Kindly add and then proceed");
      setisSummaryVisible(false);
    } else {
      setisSummaryVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 65,
          }}
        >
          <Menu theme="dark" mode="inline">
            <Menu.Item
              className="menubar-link"
              icon={
                <HomeOutlined
                  style={{ marginRight: "30px", fontSize: "20px" }}
                />
              }
            >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              className="menubar-link"
              icon={
                <SubnodeOutlined
                  style={{ marginRight: "30px", fontSize: "20px" }}
                />
              }
            >
              <Link to="/purchaselist">Purchase</Link>
            </Menu.Item>
            <Menu.Item
              className="menubar-link"
              icon={
                <FolderAddOutlined
                  style={{ marginRight: "25px", fontSize: "20px" }}
                />
              }
            >
              <Link to="/summary"> Summary</Link>
            </Menu.Item>
            <Menu.Item
              className="menubar-link"
              icon={
                <LogoutOutlined
                  style={{ marginRight: "30px", fontSize: "20px" }}
                />
              }
            >
              LogOut
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
      <Layout>
        <Header style={{ position: "fixed", width: "100%", zIndex: "2" }}>
          <div className="front-heading">
            <DashboardOutlined
              style={{ marginRight: "30px", fontSize: "30px" }}
            />
            Welcome to Dashboard
          </div>
          <div className="main-cart-btn">
            <Button
              onClick={showModal}
              icon={
                <ShoppingCartOutlined
                  style={{
                    marginRight: "5px",
                    fontSize: "20px",
                    color: "red",
                  }}
                />
              }
            >
              {totalQuantity}
            </Button>
          </div>
        </Header>
        <Modal
          title="Here is Your cart"
          visible={isModalVisible}
          okText="Proceed to Checkout"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <List
            itemLayout="horizontal"
            dataSource={product}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.img} />}
                  title={item.name}
                  description={`Rs${item.price * item.amount}`}
                />
                <Button
                  onClick={() =>
                    dispatch({ type: "FINAL_ADD", payload: item.id })
                  }
                  icon={<PlusOutlined />}
                />
                <div className="model-qty">{item.amount}</div>
                <Button
                  onClick={() =>
                    dispatch({ type: "FINAL_DEC", payload: item.id })
                  }
                  icon={<MinusOutlined />}
                />

                <Button
                  onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                  danger
                  icon={<DeleteOutlined />}
                >
                  Delete Item
                </Button>
              </List.Item>
            )}
          />
          <Button
            onClick={() => dispatch({ type: "REMOVE_CART" })}
            type="primary"
            danger
          >
            Clear Cart
          </Button>
        </Modal>
        <Modal
          title="Enter Your Details Below"
          visible={isSummaryVisible}
          okText="Book Order"
          onOk={() => alert("your order has been booked")}
          onCancel={() => setisSummaryVisible(false)}
        >
          <form
            autoComplete="off"
            className="ui form"
            onSubmit={handleInputSubmit}
          >
            <div className="field">
              <label>FullName</label>
              <input
                type="text"
                value={Fullname}
                name="FullName"
                onChange={handleInputName}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                value={Email}
                name="Email"
                onChange={handleInputEmail}
              />
            </div>
            <div className="field">
              <label>Phone</label>
              <input
                type="number"
                value={Phone}
                name="Phone"
                onChange={handleInputPhone}
              />
            </div>
            <div className="field">
              <label>Address</label>
              <textarea
                value={Address}
                name="Address"
                onChange={handleInputAdress}
              />
            </div>
            <div>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleInputSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </Modal>
      </Layout>
    </>
  );
};

export default connect()(Salesmenu);
