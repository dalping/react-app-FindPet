import React from "react";
import * as Styled from "./style";

function DetailModal({ data, closeDetailModal }) {
  return (
    <Styled.DetailModalLayout onClick={closeDetailModal}>
      <Styled.DetailModalwrapper>
        <span className="noticeNo">{data.noticeNo}</span>
        <div className="AnimalImg">
          <img alt="" src={data.popfile}></img>
        </div>
        <table className="AnimalInfo">
          <tbody>
            <tr>
              <th>견종</th>
              <td>{data.kindCd}</td>
            </tr>
            <tr>
              <th>성별</th>
              <td>{data.sexCd === "M" ? "수컷" : "암컷"}</td>
            </tr>
            <tr>
              <th>나이</th>
              <td>{data.age}</td>
            </tr>
            <tr>
              <th>몸무게</th>
              <td>{data.weight}</td>
            </tr>
            <tr>
              <th>중성화</th>
              <td>{data.neuterYn === "Y" ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>특징</th>
              <td>{data.specialMark}</td>
            </tr>
            <tr>
              <th>발견장소</th>
              <td>{data.happenPlace}</td>
            </tr>
          </tbody>
        </table>
        <div className="careInfo">
          <span>
            보호소 : {data.careNm}(Tel.{data.careTel})
          </span>
          <span>
            공고일 : {data.noticeSdt} - {data.noticeEdt}
          </span>
          {/* <span>담당부서 : {data.careTel}</span> */}
        </div>
      </Styled.DetailModalwrapper>
    </Styled.DetailModalLayout>
  );
}

export default DetailModal;
