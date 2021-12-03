import React from "react";
import * as Styled from "./style";

function Card({ data }) {
  return (
    <Styled.CardWrapper>
      <img alt="" src={data.popfile}></img>

      <strong className="state">{data.processState}</strong>
      <span>품종 : {data.kindCd}</span>
      <span>등록일 : {data.happenDt}</span>
      <span>보호장소 : {data.careNm}</span>
      <span>구조장소 : {data.happenPlace}</span>
    </Styled.CardWrapper>
  );
}

export default Card;
