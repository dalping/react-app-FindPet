import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { getAPI } from "../../../utils/getData";
import DetailModal from "./DetailModal";
import * as Styled from "./style";

function CardList({ SelectedOption }) {
  const [Data, setData] = useState([]);
  const [Page, setPage] = useState(1);
  const [OpenDetailModal, setOpenDetailModal] = useState(false);
  const [DetailData, setDetailData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const interSectRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    if (interSectRef.current) observer.observe(interSectRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    setPage(1);
    setData([]);
    console.log("SelectedOption change");
  }, [SelectedOption]);

  useEffect(() => {
    setIsLoaded(true);

    const optionURL = `&numOfRows=20&pageNo=${Page}` + makeURL();

    axios.get(getAPI("abandonmentPublic", optionURL)).then((res) => {
      console.log(res.data.response.body);
      setData(Data.concat(res.data.response.body.items.item));
      setIsLoaded(false);
    });
  }, [Page]);

  const makeURL = () => {
    let option = "";

    if (SelectedOption.sido !== "") {
      option = option + `&upr_cd=${SelectedOption.sido}`;
    }

    if (SelectedOption.sigungu !== "") {
      option = option + `&org_cd=${SelectedOption.sigungu}`;
    }

    return option;
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  const setDetailModalHandler = (data) => {
    setOpenDetailModal(true);
    setDetailData(data);
  };

  const closeDetailModal = () => {
    setOpenDetailModal(false);
  };

  const stylePrevent = {
    position: "fixed",
  };

  return (
    <div style={OpenDetailModal ? stylePrevent : null}>
      {OpenDetailModal && (
        <DetailModal data={DetailData} closeDetailModal={closeDetailModal} />
      )}
      <Styled.CardListLayout>
        {Data.map((data, idx) => (
          <Styled.CardWrapper
            key={idx}
            onClick={() => {
              setDetailModalHandler(data);
            }}
          >
            <img alt="" src={data.popfile} />
            <strong className="state">{data.processState}</strong>
            <span>품종 : {data.kindCd}</span>
            <span>등록일 : {data.happenDt}</span>
            <span>보호장소 : {data.careNm}</span>
            <span>구조장소 : {data.happenPlace}</span>
          </Styled.CardWrapper>
        ))}
        <div className="observer" ref={interSectRef}></div>
      </Styled.CardListLayout>
    </div>
  );
}

export default CardList;
