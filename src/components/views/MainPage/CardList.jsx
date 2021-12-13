import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { getAPI } from "../../../utils/getData";
import DetailModal from "./DetailModal";
import Loading from "./Loading";
import * as Styled from "./style";
import { makeToday } from "../../../utils/makeData";

function CardList({ SelectedOption }) {
  const [Data, setData] = useState([]);
  const [Page, setPage] = useState(1);
  const [OpenDetailModal, setOpenDetailModal] = useState(false);
  const [DetailData, setDetailData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [FinalData, setFinalData] = useState(false);
  const [Today, setToday] = useState(makeToday());
  const interSectRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    if (interSectRef.current) observer.observe(interSectRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  //페이지가 1인 경우 작동
  useEffect(() => {
    setFinalData(false);
    setPage(1);
    setData([]);
    getData();
  }, [SelectedOption]);

  //페이지가 1이면 작동하지 말자
  useEffect(() => {
    if (Page === 1 || FinalData) return;
    getData();
  }, [Page]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //페이지가 1이면 데이터가 존재할 경우에만 동작
      //if (Data.length === 0) return;
      setPage((prev) => prev + 1);
    }
  }, []);

  const getData = () => {
    const optionURL = `&numOfRows=30&pageNo=${Page}` + makeURL();

    setIsLoaded(true);

    axios.get(getAPI("abandonmentPublic", optionURL)).then((res) => {
      const data = res.data.response.body.items.item;

      if (!data) {
        setFinalData(true);
        setIsLoaded(false);
        return;
      }

      if (data.length < 30) {
        setFinalData(true);
      }

      setData(Data.concat(data));
      setIsLoaded(false);
    });
  };

  const getStateProcess = (endDate, process) => {
    if (process !== "보호중") {
      return process;
    }

    if (endDate >= Today) {
      return "공고중";
    } else {
      return "보호중";
    }
  };

  const makeURL = () => {
    let option = "";

    if (SelectedOption.sido !== "") {
      option = option + `&upr_cd=${SelectedOption.sido}`;
    }

    if (SelectedOption.sigungu !== "") {
      option = option + `&org_cd=${SelectedOption.sigungu}`;
    }

    if (SelectedOption.upkind !== "") {
      option = option + `&upkind=${SelectedOption.upkind}`;
    }

    if (SelectedOption.kind !== "") {
      option = option + `&kind=${SelectedOption.kind}`;
    }

    return option;
  };

  const setDetailModalHandler = (data) => {
    document.body.style.overflow = "hidden";
    setOpenDetailModal(true);
    setDetailData(data);
  };

  const closeDetailModal = () => {
    document.body.style.overflow = "unset";
    setOpenDetailModal(false);
  };

  return (
    <div>
      {OpenDetailModal && (
        <DetailModal data={DetailData} closeDetailModal={closeDetailModal} />
      )}
      {isLoaded && <Loading />}

      <Styled.CardListLayout>
        {Data.map((data, idx) => (
          <Styled.CardWrapper
            key={idx}
            onClick={() => {
              setDetailModalHandler(data);
            }}
            processState={getStateProcess(data.noticeEdt, data.processState)}
          >
            <img alt="" src={data.popfile} />
            <strong className="state">
              {getStateProcess(data.noticeEdt, data.processState)}
            </strong>
            <span>품종 : {data.kindCd}</span>
            <span>등록일 : {data.happenDt}</span>
            <span>보호장소 : {data.careNm}</span>
            <span>구조장소 : {data.happenPlace}</span>
          </Styled.CardWrapper>
        ))}
      </Styled.CardListLayout>
      <div className="observer" ref={interSectRef} />
      {FinalData && (
        <div
          style={{
            padding: "20px 10px",
            color: "black",
            backgroundColor: "#DFDFDF",
            boxSizing: "border-box",
            margin: "20px 0",
          }}
        >
          표시할 데이터가 없습니다...
        </div>
      )}
    </div>
  );
}

export default CardList;
