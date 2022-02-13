import React from 'react';
import { useParams } from 'react-router-dom';

const Feedback = () => {
  const { id } = useParams();

  return (
    <div>
      <div>Feedback {id}</div>
    </div>
  );
};

export default Feedback;
