import axios from "axios";
import _ from "lodash";

const httpClient = axios.create({ baseURL: "https://restcountries.com/v2" });

httpClient.interceptors.response.use((res) => {
  res.data = _.shuffle(res.data);
  return res;
});
export default httpClient;
