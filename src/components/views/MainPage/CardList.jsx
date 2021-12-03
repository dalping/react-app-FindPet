import axios from "axios";
import React, { useState, useEffect } from "react";
import { getAPI } from "../../../utils/getData";
import Card from "./Card";
import DetailModal from "./DetailModal";
import * as Styled from "./style";

function CardList() {
  const [Data, setData] = useState([]);
  const [Page, setPage] = useState(3);
  useEffect(() => {
    axios
      .get(getAPI("abandonmentPublic", `&numOfRows=20&pageNo=${Page}`))
      .then((res) => {
        console.log(res.data.response.body);
        setData(res.data.response.body.items.item);
      });
  }, []);

  return (
    <>
      <DetailModal />
      <Styled.CardListLayout>
        {Data.map((data) => (
          <Card key={data.desertionNo} data={data}></Card>
        ))}
      </Styled.CardListLayout>
    </>
  );
}

export default CardList;
