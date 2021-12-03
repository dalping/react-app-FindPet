import styled from "styled-components";

export const Layout = styled.div`
  padding: 20px;
  padding-top: 80px;
  width: 100vw;
`;

export const SelectorLayout = styled.div`
  margin-bottom: 20px;
`;

export const CardListLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid black;
  gap: 10px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #ebebeb;
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 150px;
  }

  span {
    font-size: 0.8rem;
  }

  strong {
    font-weight: 1000;
    color: green;
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
  height: 100vh;
  padding-top: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3000;
`;

export const DetailModalwrapper = styled.div`
  background-color: white;
  width: 50vw;
  height: 80vh;
  border-radius: 10px;
`;
