import { useState } from "react";
import { Api } from "../API/Api";

export const useEditInfo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const editDataIngestion = async (value) => {
    setIsLoading(true);
    console.log(value)
    const response = await Api.fetch("users/", {
      value,
    });

    setIsLoading(false);
    // console.log(response);
    return response;
  };

  return { editDataIngestion, isLoading };
};