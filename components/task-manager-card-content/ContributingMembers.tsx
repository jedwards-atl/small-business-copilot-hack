import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const members = [
  { name: "Ash", avatar: "https://github.com/shadcn.png" },
  { name: "Kiron", avatar: "https://github.com/shadcn.png" },
  { name: "Adam", avatar: "https://github.com/shadcn.png" },
  { name: "Jim", avatar: "https://github.com/shadcn.png" },
  { name: "Brie", avatar: "https://github.com/shadcn.png" },
  { name: "Melissa", avatar: "https://github.com/shadcn.png" },
  { name: "Jake", avatar: "https://github.com/shadcn.png" },
  { name: "Ahad", avatar: "https://github.com/shadcn.png" },
  { name: "Stanton", avatar: "https://github.com/shadcn.png" },
  { name: "Gunjan", avatar: "https://github.com/shadcn.png" },
  { name: "Emily", avatar: "https://github.com/shadcn.png" },
  { name: "Deepika", avatar: "https://github.com/shadcn.png" },
  { name: "Kelvin", avatar: "https://github.com/shadcn.png" },
  { name: "Bob", avatar: "https://github.com/shadcn.png" },
  { name: "Megan", avatar: "https://github.com/shadcn.png" },
  { name: "Nagore", avatar: "https://github.com/shadcn.png" },
  { name: "Ajna", avatar: "https://github.com/shadcn.png" },
  { name: "Natalie", avatar: "https://github.com/shadcn.png" },
];

const ContributingMembers = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {members.map(({ name, avatar }, index) => (
          <div
            key={name}
            className="flex items-center gap-3 p-2 rounded-lg hover-bg-gray-50"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="text-sm font-medium">
                {name}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-900">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributingMembers;
