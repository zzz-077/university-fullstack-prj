import React, { useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, AlarmClock } from "lucide-react";

const data = [
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
  },
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
  },
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
  },
];

const HomeStudent = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    {
      accessorKey: "subject",
      header: <span className="text-blue-300 ">Subject</span>,
      cell: ({ row }) => {
        return (
          <div className="flex flex-col justify-between items-start gap-4 text-xs sm:text-sm ">
            <h4 className="text-lg font-semibold capitalize text-blue-400 ">
              {row.getValue("subject")?.name}
            </h4>
            <div className="flex justify-start gap-4">
              <span className="bg-blue-900/30 text-white font-bold py-1 rounded-md flex items-center w-fit px-2 text-nowrap uppercase">
                {row.getValue("subject")?.code}
              </span>
              <span className="text-white font-bold py-1 rounded-md flex items-center w-fit px-2 text-nowrap capitalize bg-green-600">
                Group:{" " + row.getValue("subject")?.group}
              </span>
              <span
                className="mt-auto text-blue-300 text-sm cursor-pointer underline hover:brightness-75 transition-all duration-1000
                "
                title="See Points"
              >
                View
              </span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "schedule",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-amber-300"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
          >
            Schedule
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start ">
          <div className="w-fit text-sm font-semibold flex gap-2 justify-between items-center rounded text-amber-400">
            {row.getValue("schedule")?.day},
            {" " + row.getValue("schedule")?.time}
            <AlarmClock className="w-5 text-amber-500" />
          </div>
          <div className="w-fit flex justify-between gap-5">
            <span className="text-xs font-bold bg-amber-500/20 text-orange-400 py-1 px-2 rounded">
              {row.getValue("schedule")?.lab}
            </span>
            <span className="text-xs font-bold bg-amber-500/20 text-orange-400 py-1 px-2 rounded">
              {row.getValue("schedule")?.lecturer}
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full pl-10 pr-3">
      <CustomTable
        columns={columns}
        data={data}
        searchBy="subject"
        searchable={false}
      />
    </div>
  );
};

export default HomeStudent;
