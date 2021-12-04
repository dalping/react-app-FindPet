import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import Selector from "./Selector";
import CardList from "./CardList";

function MainPage() {
  const [SelectedOption, setSelectedOption] = useState({
    sido: "",
    sigungu: "",
  });

  useEffect(() => {
    console.log(SelectedOption);
  }, [SelectedOption]);

  //{sido:'',sigungu:'',}
  const setOption = (option) => {
    setSelectedOption({ ...SelectedOption, ...option });
  };

  return (
    <Styled.Layout>
      <Selector setOption={setOption} />
      <CardList SelectedOption={SelectedOption} />
    </Styled.Layout>
  );
}

export default MainPage;
