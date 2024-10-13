import { algoliasearch } from "algoliasearch";
import {APPLICATION_ID, SEARCH_API_KEY } from "../../consts";

export const FetchIndex = async () => {

  const client = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);
  const response = await client.listIndices();
  return response.items;
};

export const FormatIndices = (data) => {
  console.log(data);
  let formattedQuestions = [];
  data.forEach((index) => {
    const splitTitle = index.name.split("-");
    formattedQuestions.push({ topic: splitTitle[0], questionNumber: splitTitle[1] });
  });
  return formattedQuestions;
};
