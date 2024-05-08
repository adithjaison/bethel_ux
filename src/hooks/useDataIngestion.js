// import { useState } from "react";
// import { Api } from "../API/Api";

// export const useDataIngestion = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const saveDataIngestion = async (
//     // visitor_parameters,
//     data,
//     message_type,
//     page_name,
//     // query_string,
//     // visitor_data
//   ) => {
//     console.log("ingestion")
//     console.log(data)
//     setIsLoading(true);
//     const response = await Api.post("users/", {
//       data,
//       message_type,
//       page_name,
//       // query_string,
//       // visitor_data,
//     });
//     setIsLoading(false);
//     console.log(response)
//     return response;
//   };
//   return { saveDataIngestion, isLoading };
// };
import { useState } from "react";
import { Api } from "../API/Api";

export const useDataIngestion = () => {
  const [isLoading, setIsLoading] = useState(false);

  const saveDataIngestion = async ({ email, password }, message_type, page_name) => {
    setIsLoading(true);

    const response = await Api.post("users/", {
      email,
      password,
      message_type,
      page_name,
    });

    setIsLoading(false);
    // console.log(response);
    return response;
  };

  return { saveDataIngestion, isLoading };
};