import styled, { ThemedStyledInterface } from "styled-components";

const setStateColor = (val) => {
  switch (val) {
    case "공고중":
      return "green";
    case "보호중":
      return "red";
    default:
      return "grey";
  }
};

export const Layout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  width: 100%;
  box-sizing: border-box;

  .MainWrapper {
    width: 1728px;
  }

  ${({ theme }) => theme.main.media.pc3} {
    .MainWrapper {
      width: 1376px;
    }
  }

  ${({ theme }) => theme.main.media.pc2} {
    .MainWrapper {
      width: 1024px;
    }
  }

  ${({ theme }) => theme.main.media.pc1} {
    .MainWrapper {
      width: 768px;
    }
  }

  ${({ theme }) => theme.main.media.tab2} {
    .MainWrapper {
      width: 100%;
    }
  }

  ${({ theme }) => theme.main.media.tab1} {
    .MainWrapper {
      width: 100%;
    }
  }

  /* @media screen and (max-width: 1919px) {
    .MainWrapper {
      width: 1376px;
    }
  }

  @media screen and (max-width: 1440px) {
    .MainWrapper {
      width: 1024px;
    }
  }

  @media screen and (max-width: 1056px) {
    .MainWrapper {
      width: 768px;
    }
  }

  @media (max-width: 767px) {
    .MainWrapper {
      width: 100%;
    }
  } */
`;

export const SelectorLayout = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s;
  box-sizing: border-box;
  margin: 1rem;
  width: calc(25% - 2rem);

  //1056
  ${({ theme }) => theme.main.media.pc1} {
    width: calc(100% / 3 - 2rem);
  }

  ${({ theme }) => theme.main.media.tab2} {
    width: calc(100% / 2 - 2rem);
  }

  //767
  ${({ theme }) => theme.main.media.tab1} {
    width: 100%;
  }

  &:hover {
    background-color: #ebebeb;
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 30vh;
    overflow: hidden;
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
  width: 80vw;
  max-height: 90vh;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  overflow: scroll;

  .content {
    width: 100%;
    height: 100%;
    overflow: scroll;

    .imgView {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: scroll;
      background-color: black;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        cursor: pointer;
      }
    }

    .AnimalImg {
      border-radius: 5px;
      width: 100%;
      background-color: black;
      display: flex;
      justify-content: center;
      //overflow: scroll;

      img {
        width: 100%;
        cursor: pointer;
      }
    }

    .AnimalInfo {
      font-size: 0.9rem;
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
      font-size: 0.9rem;
      border-top: 1px solid #dfdfdf;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px 0;
    }
  }

  .noticeNo {
    color: gray;
    margin-bottom: 10px;
  }

  .closeBtn {
    position: absolute;
    right: 0.5rem;
    top: 0.5em;
    font-size: 1.5rem;
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
