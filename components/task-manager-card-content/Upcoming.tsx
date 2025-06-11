import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Calendar1 } from "lucide-react";

const participants = [
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
];

const Upcoming = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <p className="text-gray-600 font-medium text-sm ">Friday, June 13</p>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center justify-around h-full">
          <p className="span-col-1 text-gray-900 text-3xl font-bold">17:30</p>
        </div>

        <div className="span-col-1 flex-1 h-20">
          <div className="border-l-4 border-purple-600 pl-4 h-full">
            <p className="text-sm text-gray-600 tracking-wide font-medium mb-1">
              Insights
            </p>
            <p className="text-md font-semibold text-gray-900">
              Review Site Analytics
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 font-medium mb-3">
            Participants:
          </p>
          <div className="flex space-x-4">
            {participants.map((avatar, index) => (
              <Avatar className="h-10 w-10 border-2 border-white" key={index}>
                <AvatarImage src={avatar} alt={avatar} />
                <AvatarFallback className="text-sm font-medium">
                  {avatar}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 font-medium mb-3">App Used:</p>
          <div className="flex items-center space-x-3">
            <Calendar1 className="w-8 h-8 text-purple-600" />
            {/* <div className="w-2 h-2 bg-purple-300 rounded-full group-hover:bg-gray-400"></div> */}
            <span className="text-md text-gray-900 truncate">
              Google Calendar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
