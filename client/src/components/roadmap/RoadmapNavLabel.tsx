import React from 'react';
import { getStatusCount } from '../../utils/utilFunctions';
import { FeedbackType, StatusType } from '../../utils/type';

interface Props {
  selectedStatus: StatusType;
  setSelectedStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  status: StatusType;
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
      className={`w-1/3 py-4 text-body3 font-bold text-navy text-opacity-30 cursor-pointer transition-all ${
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
