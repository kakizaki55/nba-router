import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArtWorkById } from '../../services/fetch';

export default function DetailsPage() {
  const [artwork, setArtWork] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetchArtWorkById(id);

      setArtWork(data);
    };
    fetchdata();
  }, [id]);

  const { artwork_type_title, dimensions } = artwork;
  return (
    <div>
      <h3>{artwork_type_title}</h3>
      <h6>{dimensions}</h6>
    </div>
  );
}
