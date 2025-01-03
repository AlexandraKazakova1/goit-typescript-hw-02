import axios from "axios";

interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
}

interface FetchArticlesResponse {
  results: Image[];
  total_pages: number;
}

export const fetchArticles = async (
  query: string,
  page: number
): Promise<FetchArticlesResponse> => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID SL76qFrJljjmTwgE_HFP7v5ZWwc6YLum-SAkymRi4_w`,
    },
  });

  return response.data;
};
