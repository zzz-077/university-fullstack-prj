import React from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, AlarmClock } from "lucide-react";
const data = [
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: {name:"merab",lastName:'vardiashvili'},
    faculty: "computere sience",
  },
];
const HomeAdmin = () => {
  const columns = [
    {
      accessorKey: "userID",
      header: <span className="text-blue-300 ">userID</span>,
      cell: ({ row }) => {
        return (
          <div className="flex flex-col justify-between items-start gap-4 text-xs sm:text-sm ">
            {row?.getValue("userID")}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start">
          {row.getValue('name')?.name}
          {row.getValue('name')?.lastName}
        </div>
      ),
    },
    {
      accessorKey: "faculty",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-green-300"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Faculty
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start ">
          {row.getValue("faculty")}
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-full">
      <CustomTable
        columns={columns}
        data={data}
        searchBy="userID"
        searchable={true}
        className="max-w-6xl"
      />
    </div>
  );
};

export default HomeAdmin;
