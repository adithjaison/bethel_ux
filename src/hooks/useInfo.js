import { Api } from "../API/Api";


export const useInfo = () => {
  const getUseInfo = async (uuid) => {
    const response = await Api.get("users/" + uuid, {});
    return response;
  };
  return { getUseInfo };
};