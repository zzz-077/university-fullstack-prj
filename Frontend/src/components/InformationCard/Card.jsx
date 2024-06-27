import React from "react";
import userImg from "../../../public/icons/user.png";
const Card = () => {
  return (
    <div className="min-w-96 min-h-full bg-[#172133] rounded-2xl py-4 px-8">
      <div className="min-h-full flex flex-col">
        <div className="flex justify-between h-fit text-xl">
          <h3>Information card</h3>
          <button>...</button>
        </div>
        <div className="flex flex-col py-5 flex-grow">
          <div className="flex gap-5 pb-5">
            <img src={userImg} alt={userImg} />
            <h3 className="text-xl">Merab Vardiashvili</h3>
          </div>

          <table className="flex flex-col text-nowrap flex-grow">
            <tbody className="flex flex-col flex-wrap flex-grow justify-around">
              <tr className="flex justify-between">
                <td className="flex">Name:</td>
                <td className="flex w-40 text-left">Merab</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Last Name:</td>
                <td className="flex w-40 text-left">Vardiashvili</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">User ID:</td>
                <td className="flex w-40 text-left">22100480</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Personal ID:</td>
                <td className="flex w-40 text-left">09999999999</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">E-Mail:</td>
                <td className="flex w-40 text-left">red@gmail.com</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Date Of Birth:</td>
                <td className="flex w-40 text-left">28.11.2004</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Place Of Birth:</td>
                <td className="flex w-40 text-left">Georgia</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Admission Date:</td>
                <td className="flex w-40 text-left">05.01.2019</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Faculty Program:</td>
                <td className="flex w-40 text-left">computure sience</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Sector:</td>
                <td className="flex w-40 text-left">Georgian</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Position:</td>
                <td className="flex w-40 text-left">Student</td>
              </tr>
              <tr className="flex justify-between">
                <td className="flex">Phone Number:</td>
                <td className="flex w-40 text-left">+ 995 557-555-555</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
