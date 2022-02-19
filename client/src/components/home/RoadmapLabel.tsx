import React from 'react';
import { FeedbackType } from '../../utils/type';
import { getStatusCount } from '../../utils/utilFunctions';

interface Props {
  status: string;
  feedbackList?: FeedbackType[];
}

const RoadmapLabel = ({ status, feedbackList }: Props) => {
  return (
    <div className='flex items-center justify-between text-body1 text-lightNavy '>
      <div
        className={`w-2 h-2 rounded-full ${
          status === 'Planned'
            ? 'bg-orange'
            : status === 'In-Progress'
            ? 'bg-purple'
            : 'bg-lightBlue'
        }  `}
      ></div>
      <p className='w-8/12 mx-4'>{status}</p>
      <p className='font-bold '>{getStatusCount(status, feedbackList)}</p>
    </div>
  );
};

export default RoadmapLabel;
