import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import Selector from "./Selector";
import CardList from "./CardList";

function MainPage() {
  return (
    <Styled.Layout>
      <Selector />
      <CardList />
    </Styled.Layout>
  );
}

export default MainPage;
