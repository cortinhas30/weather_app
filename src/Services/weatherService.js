//require("dotenv").config();

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(process.env.REACT_APP_BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({...searchParams, appid:process.env.REACT_APP_API_KEY});

  return fetch(url).then((res) => res.json()).then((data) => data);
};

export default getWeatherData;
