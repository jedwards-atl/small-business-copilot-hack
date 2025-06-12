import React from "react";

const TaskNotifications = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col gap-8 h-full mt-2">
        <p className="text-sb-primary font-semibold">High-Value Order Alert:</p>
        <p className="text-gray-900">
          Order #18459 for $1,250 has just been placed. Review for fraud
          protection before processing.
        </p>
        <p className="text-gray-900">Task: Manually verify order details</p>
      </div>
    </div>
  );
};

export default TaskNotifications;
