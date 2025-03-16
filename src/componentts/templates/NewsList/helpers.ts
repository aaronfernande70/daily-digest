const newsapiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const nytimesapiKey = process.env.NEXT_PUBLIC_NYTIMES_API_KEY;
const newsDataKey = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;


type FetchOptions = {
    revalidate: number;
}

const fetchAndParse = async (url: string, options: FetchOptions) => {
    try {
        const response = await fetch(url, { next: options });
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export const getHeadlines = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapiKey}&pageSize=20`;
    const data = await fetchAndParse(url, { revalidate: 3600 });
    return data?.articles || [];
};

export const getNYTimesNews = async () => {
    const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${nytimesapiKey}`;
    const data = await fetchAndParse(url, { revalidate: 3600 });
    return data?.results || [];
};

export const getNewsData = async () => {
    const url = `https://newsdata.io/api/1/latest?apikey=${newsDataKey}`;
    const data = await fetchAndParse(url, { revalidate: 3600 });
    return data?.results || [];
};
