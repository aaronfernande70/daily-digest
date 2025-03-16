export interface ArticleProps {
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    headline?: { main: string };
    content?: string;
    abstract?: string;
    web_url?: string;
    multimedia?: [{ url: string }];
    image_url?: string;
    link?:  string ;
    media?: [{ "media-metadata": { url: string }[] }];
}