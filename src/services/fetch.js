export const fetchArtWork = async () => {
  const response = await fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=20');
  const { data } = await response.json();
  return data;
};
