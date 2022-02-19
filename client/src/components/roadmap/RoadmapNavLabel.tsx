import React from 'react';
import { getStatusCount } from '../../utils/utilFunctions';
import { FeedbackType } from '../../utils/type';

interface Props {
  selectedStatus: 'Planned' | 'In-Progress' | 'Live';
  setSelectedStatus: React.Dispatch<
    React.SetStateAction<'Planned' | 'In-Progress' | 'Live'>
  >;
  status: 'Planned' | 'In-Progress' | 'Live';
  feedback?: FeedbackType[];
}

const RoadmapNavLabel = ({
  selectedStatus,
  setSelectedStatus,
  status,
  feedback,
}: Props) => {
  return (
    <div
      className={`w-1/3 py-4 text-body3 font-bold text-navy text-opacity-30 cursor-pointer ${
        status === selectedStatus
          ? `text-opacity-100 font-bold border-b-4 ${
              status === 'Planned'
                ? 'border-orange '
                : status === 'In-Progress'
                ? 'border-purple'
                : 'border-lightBlue'
            }`
          : ''
      } `}
      onClick={() => setSelectedStatus(status)}
    >
      <p>
        {status} ({getStatusCount(status, feedback)})
      </p>
    </div>
  );
};

export default RoadmapNavLabel;
