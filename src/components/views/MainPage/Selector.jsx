import React, { useState, useEffect } from "react";
import { sido } from "../../../api/url";
import axios from "axios";
import { getAPI } from "../../../utils/getData";
import * as Styled from "./style";

function Selector() {
  //sido, sigungu, shelter, kind
  const [Sido, setSido] = useState([]);
  const [Sigungu, setSigungu] = useState([]);
  const [SelectedItem, setSelectedItem] = useState({ sido: "", sigungu: "" });
  useEffect(() => {
    axios.get(getAPI("sido", "")).then((res) => {
      setSido(res.data.response.body.items.item);
    });
  }, []);

  const getSigungu = (e) => {
    if (e.target.value === "basic") {
      setSigungu([]);
      return;
    }

    axios.get(getAPI("sigungu", `&upr_cd=${e.target.value}`)).then((res) => {
      setSigungu(res.data.response.body.items.item);
    });
  };

  return (
    <Styled.SelectorLayout>
      {Sido && (
        <select className="sido" onChange={getSigungu}>
          <option value="basic">--선택--</option>
          {Sido.map((data) => (
            <option key={data.orgCd} value={data.orgCd}>
              {data.orgdownNm}
            </option>
          ))}
        </select>
      )}
      {Sigungu && (
        <select className="sigungu">
          <option value="basic">--선택--</option>
          {Sigungu.map((data) => (
            <option key={data.orgCd} value={data.orgCd}>
              {data.orgdownNm}
            </option>
          ))}
        </select>
      )}
    </Styled.SelectorLayout>
  );
}

export default Selector;
