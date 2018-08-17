const apiEndpoint = 'http://apilayer.net/api/detect';
const accessKey = process.env.REACT_APP_LANGUAGE_LAYER_API_ACCESS_KEY;

export const searchForLanguage = async (searchTerm) => {
  const fetchUrl = `${apiEndpoint}?access_key=${accessKey}&query=${searchTerm}`
  const response = await fetch(fetchUrl);
  return await response.json();
}