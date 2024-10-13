import { algoliasearch } from "algoliasearch";

export const FetchIndex = async () => {
  const APPLICATION_ID = "ZQM88NX272";
  const SEARCH_API_KEY = "e4d63f91993089432d870cbc38cfe870";

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
