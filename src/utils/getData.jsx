const proxyCors = "https://cors-anywhere.herokuapp.com/";
const proxyCors2 = "https://proxy-anywhere1205.herokuapp.com/";
const porxyCors3 = "https://heroku-cors-proxy0301-34c420e6a866.herokuapp.com/"
import { openData, myKey } from "../api/url";

// sido, sigungu, shelter, kind,abandonmentPublic

// export const sido = `${proxyCors}${openDataAPI}sido?&_returnType=json&ServiceKey=${myKey}`;
// export const sigungu = `${proxyCors}http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/sigungu`;
// export const shelter = `${proxyCors}http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/shelter?&_returnType=json&ServiceKey=${myKey}`;
// export const kind = `${proxyCors}kind?&_returnType=json&ServiceKey=${myKey}`;

export const getAPI = (data, variable) => {
  console.log(`${porxyCors3}${openData}${data}?&_type=json&ServiceKey=${myKey}${variable}`)
  return `${porxyCors3}${openData}${data}?&_type=json&ServiceKey=${myKey}${variable}`;
};
