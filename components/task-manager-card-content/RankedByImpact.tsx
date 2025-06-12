import React from "react";
import { Chart } from "../Chart";

const RankedByImpact = () => {
  return (
    <div className="flex flex-col items-baseline gap-2">
      {/* <div>
        <span className="text-4xl font-bold text-gray-900">30%</span>
        <span className="text-sm font-medium text-green-600">+5%</span>
      </div> */}

      <Chart />
    </div>
  );
};

export default RankedByImpact;
