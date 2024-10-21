import { Button, Card, Col, Flex, Image, Typography } from "antd";
import React from "react";
import img1 from "../assets/img01.jpg";

const Banner = () => {
  return (
    <Card>
      <Flex vertical gap="30px">
        <Flex align="flex-start">
          <Col flex={2}>
            <Image src={img1} style={{ maxHeight:"400px"}}></Image>
          </Col>
          <Col vertical style={{ paddingLeft: "20px", height:"auto" }} flex={3}>
          <Flex vertical justify="space-between">
            <Typography.Title level={2} strong>
              Create and sell products
            </Typography.Title>
            <Typography.Text type="secondary" strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              dignissimos sunt quisquam corporis laborum placeat, sint nostrum,
              asperiores odit mollitia delectus libero, at inventore ratione
              voluptates earum culpa veniam sed.
            </Typography.Text>
            <Flex gap="large">
              <Button type="primary" size="large">
                Explore More
              </Button>
              <Button size="large">Top Sellers</Button>
            </Flex>
            </Flex>
          </Col>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
