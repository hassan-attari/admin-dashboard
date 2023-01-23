import axios from "axios";
import { makeUseAxios } from "axios-hooks";

const BASE_URL = "https://react-mini-projects-api.classbon.com";

export const useAxios = makeUseAxios({
  axios: axios.create({ baseURL: BASE_URL }),
});
