import  axios from "axios"
type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type DataResponse = {
  results: ImageData[];
  total_pages: number;
};



const fetchImages = async (
  query: string,
  page: number
): Promise<DataResponse> => {
  const response = await axios.get<DataResponse>(
    `https://api.unsplash.com/search/photos`,
    {
    params: {
      query,
      page,
       per_page: 8,
      client_id: "VMhRy6RYve9-7My63BLa6uXAkq0EdaGDKvpfLxnUc7Q",
    },
  });
  return response.data
};

export default fetchImages;