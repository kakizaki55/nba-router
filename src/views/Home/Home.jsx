import React, { useState, useEffect } from 'react';
import ArtWorkCard from '../../components/ArtworkCard/ArtWorkCard';
import { fetchArtWork } from '../../services/fetch';
import { Link } from 'react-router-dom';

export default function Home() {
  const [artworkList, setArtWorkList] = useState([]);

  useEffect(() => {
    const fectData = async () => {
      const data = await fetchArtWork();
      setArtWorkList(data);
    };
    fectData();
  }, []);

  return (
    <>
      <dvi>
        <ul>
          {artworkList.map((artwork) => {
            return (
              <Link key={artwork.id} to={`/artwork/:${artwork.id}`}>
                <ArtWorkCard key={artwork.id} artwork={artwork} />;
              </Link>
            );
          })}
        </ul>
      </dvi>
    </>
  );
}
