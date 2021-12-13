import React, { useState, useEffect } from "react";
import { sido } from "../../../api/url";
import axios from "axios";
import { getAPI } from "../../../utils/getData";
import * as Styled from "./style";

function Selector({ setOption }) {
  //sido, sigungu, shelter, kind
  const [Sido, setSido] = useState([]);
  const [Sigungu, setSigungu] = useState([]);
  const [Kind, setKind] = useState([]);

  useEffect(() => {
    axios.get(getAPI("sido", "&numOfRows=20")).then((res) => {
      setSido(res.data.response.body.items.item);
    });
  }, []);

  const setSidoHandler = (e) => {
    setSigungu([]);
    setOption({ sido: e.target.value, sigungu: "" });

    if (e.target.value === "basic") {
      setOption({ sido: "", sigungu: "" });
      return;
    }

    axios.get(getAPI("sigungu", `&upr_cd=${e.target.value}`)).then((res) => {
      //setSelectedOption({ sido: e.target.value });
      const data = res.data.response.body.items.item;
      if (!data) {
        setSigungu([]);
      } else {
        setSigungu(data);
      }
    });
  };

  const setSigunguHandler = (e) => {
    if (e.target.value === "basic") {
      return;
    }
    setOption({ sigungu: e.target.value });
  };

  const setUpKindHandler = (e) => {
    setKind([]);
    setOption({ upkind: e.target.value, kind: "" });

    if (e.target.value === "basic") {
      setOption({ upkind: "", kind: "" });
      return;
    }

    axios.get(getAPI("kind", `&up_kind_cd=${e.target.value}`)).then((res) => {
      const data = res.data.response.body.items.item;
      setKind(data);
    });
  };

  const setKindHandler = (e) => {
    if (e.target.value === "basic") {
      return;
    }
    setOption({ kind: e.target.value });
  };

  return (
    <Styled.SelectorLayout>
      <div className="region">
        <span>지역 : </span>
        {Sido && (
          <select className="sido" onChange={setSidoHandler}>
            <option value="basic">전국</option>
            {Sido.map((data) => (
              <option key={data.orgCd} value={data.orgCd}>
                {data.orgdownNm}
              </option>
            ))}
          </select>
        )}
        {Sigungu.length > 0 && (
          <select className="sigungu" onChange={setSigunguHandler}>
            <option value="basic">시군구</option>
            {Sigungu.map((data) => (
              <option key={data.orgCd} value={data.orgCd}>
                {data.orgdownNm}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="kinds">
        <span>축종 : </span>

        <select className="upkind" onChange={setUpKindHandler}>
          <option value="basic">축종</option>
          <option value="417000">개</option>
          <option value="422400">고양이</option>
          <option value="429900">기타</option>
        </select>

        {Kind.length > 0 && (
          <select className="kind" onChange={setKindHandler}>
            <option value="basic">품종</option>
            {Kind.map((data) => (
              <option key={data.kindCd} value={data.kindCd}>
                {data.KNm}
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        <input type="checkbox" />
        <span style={{ fontSize: "0.9rem" }}> 보호중 상태만 보기</span>
      </div>
    </Styled.SelectorLayout>
  );
}

export default Selector;
