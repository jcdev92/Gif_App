const testingURL_BASE = process.env.VITE_APP_BASE_URL;
const testingURL_API = process.env.VITE_APP_API_KEY;
const URL_BASE = import.meta.env.VITE_APP_BASE_URL;
const URL_API = import.meta.env.VITE_APP_API_KEY;

export const getGifs = async (category) => {
  const url = `${URL_BASE}?api_key=${URL_API}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gifs;
};
