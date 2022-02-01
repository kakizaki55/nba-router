export const fetchArtWork = async () => {
  const response = await fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=20');
  const { data } = await response.json();
  return data;
};

export const fetchArtWorkById = async (id) => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
  console.log(response);
  const { data } = await response.json();
  console.log(data);
  return data;
};
//   const identifier = data.image_id;
//   console.log(identifier);
//   const resp = await fetch(`https://www.artic.edu/iiif/2/${identifier}/full/600,/0/default.jpg`);
//   const imgData = await resp.json();
//   console.log(imgData);
