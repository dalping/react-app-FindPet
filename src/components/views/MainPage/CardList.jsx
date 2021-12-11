import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { getAPI } from "../../../utils/getData";
import DetailModal from "./DetailModal";
import Loading from "./Loading";
import * as Styled from "./style";
import { makeToday } from "../../../utils/makeData";

function CardList({ SelectedOption }) {
  const [Data, setData] = useState([]);
  const [Page, setPage] = useState(0);
  const [OpenDetailModal, setOpenDetailModal] = useState(false);
  const [DetailData, setDetailData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const interSectRef = useRef();
  const [FinalData, setFinalData] = useState(false);
  const [Today, setToday] = useState(makeToday());
  const observer = new IntersectionObserver(handleObserver, { threshold: 1 });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
  //   if (interSectRef.current) observer.observe(interSectRef.current);
  //   return () => observer.disconnect();
  // }, [handleObserver]);

  useEffect(() => {
    console.log(Today);
  }, [Today]);

  useEffect(() => {
    if (interSectRef.current) observer.observe(interSectRef.current);
    console.log(Page);
    setFinalData(false);
    setPage(0);
    setData([]);
    return () => observer.disconnect();
  }, [SelectedOption]);

  useEffect(() => {
    if (Page === 0 || FinalData) return;
    setIsLoaded(true);

    const optionURL = `&numOfRows=30&pageNo=${Page}` + makeURL();

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
  }, [Page]);

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

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      if (FinalData) {
        console.log("마지막 데이터");
      } else {
        setPage((prev) => prev + 1);
      }
    }
  }, []);

  const setDetailModalHandler = (data) => {
    document.body.style.overflow = "hidden";
    setOpenDetailModal(true);
    setDetailData(data);
  };

  const closeDetailModal = () => {
    document.body.style.overflow = "unset";
    setOpenDetailModal(false);
  };

  const stylePrevent = {
    // position: "fixed",
    // overFlow: "hidden",
    // width: "100%",
    // height: "100%",
  };

  return (
    <div style={OpenDetailModal ? stylePrevent : null}>
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
          더 이상 표시할 데이터가 없습니다...
        </div>
      )}
    </div>
  );
}

export default CardList;
