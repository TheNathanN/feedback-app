import React from 'react';

const RoadmapCard = () => {
  const roadmapLabels = ['Planned', 'In-Progress', 'Live'];

  return (
    <div className='w-full bg-white rounded-md p-4 flex items-center justify-start flex-wrap mt-4 '>
      <div className='flex items-center justify-between w-full '>
        <h2 className='font-bold text-h3 text-navy '>Roadmap</h2>
        <button
          type='button'
          className='text-blue text-body3 font-semibold hover:underline '
        >
          View
        </button>
      </div>
      <div>
        <div className='flex items-center justify-evenly '>
          <div className='w-2 h-2 bg-orange rounded-full '></div>
          <p>{roadmapLabels[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
