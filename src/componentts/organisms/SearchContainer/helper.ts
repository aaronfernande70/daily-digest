

const fetchData = async (url: string, logMessage: string)=> {
  try {
    console.log(logMessage);
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch: ${response.statusText}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
export const getSearchResultsNewsApi = async (searchQuery: string) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;
  const data = await fetchData(url, "Fetching from News API");

  return data?.articles || [];
};

export const getSearchResultsNYT = async (searchQuery: string) => {
  const apiKey = process.env.NEXT_PUBLIC_NYTIMES_API_KEY;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${apiKey}`;
  const data = await fetchData(url, "Fetching from NYT API");

  return data?.response?.docs || [];
};
export const getSearchResultsNewsData = async (searchQuery: string) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;
  const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${searchQuery}`;
  const data = await fetchData(url, "Fetching from NewsData API");

  return data?.results || [];
};
