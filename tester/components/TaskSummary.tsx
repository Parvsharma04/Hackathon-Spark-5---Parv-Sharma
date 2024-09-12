import React from "react";
import CardDataStats from "./charts/CardDataStats";
import CircularProgressBar from './CircularProgressBar';

interface TaskSummaryProps {
  doneTasks: number;
  rate: string;
  levelUp: boolean;
  levelDown: boolean;
  totalEarned: number; // Total earned in SOL
  totalPayout: number; // Total payout in SOL
}

const TaskSummary: React.FC<TaskSummaryProps> = ({
  doneTasks,
  rate,
  levelUp,
  levelDown,
  totalEarned,
  totalPayout, // Add this new prop
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <CardDataStats
        title="Bounties Hunted"
        total={`${doneTasks}`}
        rate={rate}
        levelUp={levelUp}
        levelDown={levelDown}
      >
        <div className="flex justify-start w-full items-start">
          <div className="bg-gray-300 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </CardDataStats>

      <CardDataStats
        title="Total Earnings"
        total={`${totalEarned} SOL`}
        rate={rate}
        levelUp={levelUp}
        levelDown={levelDown}
      >
        <div className="flex justify-start w-full items-start">
          <div className="bg-gray-300 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </CardDataStats>

      <CardDataStats
        title="Total Payout"
        total={`${totalPayout} SOL`}
        rate="N/A"  // No rate for payout
      >
        <div className="flex justify-start w-full items-start">
          <div className="bg-gray-300 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </CardDataStats>
      <CircularProgressBar percentage={totalEarned}/>
    </div>
  );
};

export default TaskSummary;
