import styled from "styled-components";

const setStateColor = (val) => {
  switch (val) {
    case "보호중":
      return "green";
    case "종료(안락사)":
      return "grey";
    case "종료(반환)":
      return "red";
    case "종료(자연사)":
      return "grey";
    case "종료(입양)":
      return "red";
  }
};

export const Layout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  width: 100vw;
  box-sizing: border-box;

  .MainWrapper {
    width: 1728px;
  }

  @media (max-width: 1919px) {
    .MainWrapper {
      width: 1376px;
    }
  }

  @media (max-width: 1440px) {
    .MainWrapper {
      width: 1024px;
    }
  }

  @media (max-width: 1056px) {
    .MainWrapper {
      width: 768px;
    }
  }

  @media (max-width: 767px) {
    .MainWrapper {
      width: 100%;
    }
  }
`;

export const SelectorLayout = styled.div`
  margin-bottom: 20px;
`;

export const CardListLayout = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid black;
  gap: 10px;
  cursor: pointer;
  transition: all 0.5s;
  box-sizing: border-box;
  margin: 1rem;
  width: calc(25% - 2rem);

  @media (max-width: 1056px) {
    width: calc(100% / 3 - 2rem);
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    background-color: #ebebeb;
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }

  span {
    width: 100%;
    display: inline-block;
    font-size: 0.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  strong {
    font-weight: 1000;
    color: green;
    color: ${(props) => setStateColor(props.processState)};
  }
`;

export const DetailModalLayout = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  backdrop-filter: blur(5px);
  height: 100vh;
  padding-top: 30px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3000;
`;

export const DetailModalwrapper = styled.div`
  background-color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 70vw;
  max-height: 80vh;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  overflow: scroll;

  .closeBtn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
  }

  .imgView {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: scroll;
    background-color: black;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      cursor: pointer;
    }
  }

  .noticeNo {
    color: gray;
    margin-bottom: 10px;
  }

  .AnimalImg {
    border-radius: 5px;
    background-color: black;
    height: 40vh;
    display: flex;
    justify-content: center;
    overflow: scroll;

    img {
      height: 100%;
      cursor: pointer;
    }
  }

  .AnimalInfo {
    gap: 10px;
    margin: 20px 0;
    th {
      padding: 5px 0;
      width: 100px;
    }

    td {
      padding: 5px 0;
    }
  }

  .careInfo {
    border-top: 1px solid #dfdfdf;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
  }
`;

export const Loading = styled.div`
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;
