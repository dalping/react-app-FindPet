import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import Selector from "./Selector";
import CardList from "./CardList";

function MainPage() {
  const [SelectedOption, setSelectedOption] = useState({
    sido: "",
    sigungu: "",
    upkind: "",
    kind: "",
    state: null, //notice //protect
  });

  const setOption = (option) => {
    setSelectedOption({ ...SelectedOption, ...option });
  };

  return (
    <Styled.Layout>
      <div className="MainWrapper">
        <Selector setOption={setOption} />
        <CardList SelectedOption={SelectedOption} />
      </div>
    </Styled.Layout>
  );
}

export default MainPage;
