import React from "react";

const tasks = [
  {
    id: 1,
    name: "Eating fast food",
    notes: "Do not walk pass by a favourite restoraunt",
    list: 'Habits',
  },
];

function Tasks() {
  return (
    <div className="w-screen h-[35rem] flex justify-center items-center">
      <div className="w-[97%] h-[100%] grid  grid-cols-4 gap-10 ">
        <div className="bg-gray-200 flex justify-center items-center">
          <div className="w-[90%] h-[100%]">
            <input
              type="text"
              className="border-1 border-white bg-gray-300 w-[100%] h-[4rem] mt-4 text-xl font-bold"
              placeholder=" Add a Habit"
            />
          </div>
        </div>
        <div className="bg-gray-200">a</div>
        <div className="bg-gray-200">a</div>
        <div className="bg-gray-200">a</div>
      </div>
    </div>
  );
}

export default Tasks;
