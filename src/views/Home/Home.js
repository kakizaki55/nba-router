import React, { useState, useEffect } from 'react';
import ArtWorkCard from '../../components/ArtworkCard/ArtWorkCard';
import { fetchArtWork } from '../../services/fetch';

export default function Home() {
  const [artworkList, setArtWorkList] = useState([]);

  useEffect(() => {
    const fectData = async () => {
      const data = await fetchArtWork();
      setArtWorkList(data);
    };
    fectData();
  }, []);
  console.log(artworkList);

  return (
    <>
      <dvi>
        <ul>
          {artworkList.map((artwork) => {
            return <ArtWorkCard key={artwork.id} artwork={artwork} />;
          })}
        </ul>
      </dvi>
    </>
  );
}
