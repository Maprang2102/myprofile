import {
  Button,
  Col,
  Card,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  TreeSelect,
  Typography,
  Upload,
} from "antd";
import { React, useForm, useState } from "react";
import {
    PlusOutlined,
  } from "@ant-design/icons";

const { Title } = Typography;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
// const imgStyle = {
//     lable {
//         font-size:"20px";
//     }
//   };

const Forms = () => {
    const [input,setInput] = useState([])
    const addInput = () => {
        setInput((oldInput) => [...oldInput,input])
    }
  return (
    <>
      <Form layout="vertical">
        <Row>
          <Col span={16} style={{ padding: "0 10px" }}>
            <Title level={3} style={{ padding: "5px 0" }}>
              Topic
              <Input />
            </Title>
            <Form.Item
              label="วัตถุประสงค์และเป้าหมาย"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="ประเภท"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="สาเหตุ"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="ผลกระทบของความเสี่ยง"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="วิธีจัดการความเสี่ยง"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Risk owner"
              name="owner"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select favourite colors"
              >
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} style={{ margin: "25px 0 0 0", padding: "0 0 0 10px" }}>
            <Row align="center">
              <Divider orientation="left">คะแนนความเสี่ยง</Divider>
              <Card style={{ width: "90%", body: { padding: 0 } }}>
                <Flex justify="space-between" align="center">
                  <Col span={16} align="center">
                    <Title level={5} style={{ margin: 0 }}>
                      ระดับความเสี่ยง
                    </Title>
                    <Title level={2} style={{ margin: 0 }}>
                      สูง
                    </Title>
                  </Col>
                  <Col
                    span={8}
                    align="center"
                    justify="center"
                    style={{
                      backgroundColor: "#FFAF78",
                      borderRadius: "0 10px 10px 0",
                    }}
                  >
                    <Title level={1}>6</Title>
                  </Col>
                </Flex>
              </Card>
            </Row>
            <Row align="center">
              <Divider orientation="left">โอการเกิด</Divider>
              <Flex vertical justify="center" align="center" gap="middle">
                <Radio.Group defaultValue="a" buttonStyle="solid" size="large">
                  <Radio.Button value="a">1</Radio.Button>
                  <Radio.Button value="b">2</Radio.Button>
                  <Radio.Button value="c">3</Radio.Button>
                  <Radio.Button value="d">4</Radio.Button>
                  <Radio.Button value="e">5</Radio.Button>
                </Radio.Group>
              </Flex>
            </Row>
            <Row align="center">
              <Divider orientation="left">ผลกระทบ</Divider>
              <Flex vertical justify="center" align="center" gap="middle">
                <Radio.Group defaultValue="a" buttonStyle="solid" size="large">
                  <Radio.Button value="a">1</Radio.Button>
                  <Radio.Button value="b">2</Radio.Button>
                  <Radio.Button value="c">3</Radio.Button>
                  <Radio.Button value="d">4</Radio.Button>
                  <Radio.Button value="e">5</Radio.Button>
                </Radio.Group>
              </Flex>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Divider orientation="left">ชื่อแผน</Divider>
            <div></div>
            <Row style={{padding:'0 10px'}} >
                <div style={{display:'flex',width:'90%',gap:'10px'}}>
                <Title level={5} style={{width:'30px',margin:0}}>1. </Title>
                  <Input></Input>
                  <DatePicker onChange={onChange} />
                </div>
            </Row>
            <Row align="center" style={{margin:'10px 0'}}>
            <Button onClick={addInput} icon={<PlusOutlined />}>เพิ่ม</Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Forms;
