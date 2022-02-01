import React from 'react';
import Link from 'react-router-dom';

export default function ArtWorkCard({ artwork }) {
  const { title, category_titles, artwork_type_title, date_display } = artwork;
  return (
    <div>
      <h3>{title}</h3>
      <p>{category_titles}</p>
      <p>{artwork_type_title}</p>
      <p>{date_display}</p>
    </div>
  );
}
