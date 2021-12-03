const proxyCors = "https://cors-anywhere.herokuapp.com/";
import { openData, myKey } from "../api/url";

// sido, sigungu, shelter, kind,abandonmentPublic

// export const sido = `${proxyCors}${openDataAPI}sido?&_returnType=json&ServiceKey=${myKey}`;
// export const sigungu = `${proxyCors}http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/sigungu`;
// export const shelter = `${proxyCors}http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/shelter?&_returnType=json&ServiceKey=${myKey}`;
// export const kind = `${proxyCors}kind?&_returnType=json&ServiceKey=${myKey}`;

export const getAPI = (data, variable) => {
  return `${proxyCors}${openData}${data}?&_returnType=json&ServiceKey=${myKey}${variable}`;
};
