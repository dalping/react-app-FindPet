import React from "react";
import * as Styled from "./style";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Loading() {
  return (
    <Styled.Loading>
      <LoadingOutlined style={{ fontSize: "3rem", marginBottom: "10px" }} />
      <span>Loading...</span>
    </Styled.Loading>
  );
}

export default Loading;
