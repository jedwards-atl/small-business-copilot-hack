import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const members = [
  { name: "Ashley", avatar: "/members/ash.png" },
  { name: "Kiron", avatar: "/members/kiron.png" },
  { name: "Adam", avatar: "/members/adam.png" },
  { name: "Jim", avatar: "/members/jim.png" },
  { name: "Brie", avatar: "/members/brie.png" },
  { name: "Melissa", avatar: "/members/melissa.png" },
  { name: "Jake", avatar: "/members/jake.png" },
  { name: "Ahad", avatar: "/members/ahad.png" },
  { name: "Stanton", avatar: "/members/stanton.png" },
  { name: "Gunjan", avatar: "/members/gunjan.png" },
  { name: "Emily", avatar: "/members/emily.png" },
  { name: "Deepika", avatar: "/members/deepika.png" },
  { name: "Kelvin", avatar: "/members/kelvin.png" },
  { name: "Bob", avatar: "/members/bob.png" },
  { name: "Megan", avatar: "/members/megan.png" },
  { name: "Nagore", avatar: "/members/nagore.png" },
  { name: "Ajna", avatar: "/members/ajna.png" },
  { name: "Natalie", avatar: "/members/natalie.png" },
];

const ContributingMembers = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {members.map(({ name, avatar }, index) => (
          <div
            key={name}
            className="flex items-center gap-3 p-1 rounded-lg hover-bg-gray-50"
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
