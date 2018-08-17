const apiEndpoint = 'http://apilayer.net/api/detect';
const accessKey = process.env.LANGUAGE_LAYER_API_ACCESS_KEY;

const defaultHeaders = {
  'Content-Type': 'application/json'
};

export const searchForLanguage = async (searchTerm) => {
  const fetchUrl = `${apiEndpoint}?access_key=${accessKey}&query=${searchTerm}`
  const response = await fetch(fetchUrl, { headers: defaultHeaders });
  return await response.json();
}