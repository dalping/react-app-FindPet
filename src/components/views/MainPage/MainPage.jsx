import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { url } from "../../../api/url";

function MainPage() {
  const [Data, setData] = useState([]);

  useEffect(() => {}, []);

  return <Styled.Layout>안녕하세요?ㅇㅇ</Styled.Layout>;
}

export default MainPage;
