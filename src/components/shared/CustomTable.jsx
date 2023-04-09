import React from 'react';
import { useState } from 'react';
// json data for last two rows
const crowd_json = { "1": "Many seats available", "2": "Some seats available", "3": "All seats occupied  standing space available", "4": "Fully crowded or packed" }
const servtype_json = { "1": "Ordinary", "2": "Express Non-AC", "3": "Express AC" }
const Table = ({ data, modes }) => {
  // state variables 
  const [activeMode, setActiveMode] = useState(null);

  const handleRadioChange = (mode) => {
    setActiveMode(mode);
  }
  return (
    <div className="table-container   divide-x border-gray-400  rounded-xl bg-blue-500 overflow-auto">
      <table className=" w-full  ">
        <thead >
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
            <th className="px-6 py-3 text-left"></th>
            {modes &&
              modes.map(mode => (
                <th key={mode} className="px-6 py-3 text-left">
                   {data[0][`${mode}`]}  <br />
                   <input type="radio" name="mode" value={mode} checked={activeMode === mode} onChange={() => handleRadioChange(mode)} />
                </th>
                
              ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="bg-gray-50 border-b border-gray-200 hover:bg-yellow-200 ">
            <td className="px-6 py-4 text-left whitespace-normal text-indigo-600">
              Total travel time <br /> spent while inside the vehicle(s)
            </td>
            {modes &&
              modes.map(mode => (
                <td
                  key={`${mode}.ivtt`}
                  className="px-6 py-4 text-left whitespace-normal"
                >
                  {data[0][`${mode}.ivtt`]} min

                  <br />
                  {data[0][`${mode}.trans`] !== 0 && data[0][`${mode}.trans`]}
                  {data[0][`${mode}.trans`] !== 0 && " transfer"}
                </td>
              ))}
          </tr>
          <tr className="bg-gray-50 border-b border-gray-200 hover:bg-yellow-200">
            <td className="px-6 py-4 text-left whitespace-normal text-green-600">
              Total one-way cost of travel
            </td>
            {modes &&
              modes.map(mode => (
                <td
                  key={`${mode}.tcost`}
                  className="px-6 py-4 text-left whitespace-normal "
                >
                  Rs.{data[0][`${mode}.tcost`]}
                </td>
              ))}
          </tr>
          <tr className="bg-gray-50 border-b border-gray-200 hover:bg-yellow-200">
            <td className="px-6 py-4 text-left whitespace-normal text-purple-600">
              Total travel time spent outside vehicle(s)
            </td>
            {modes &&
              modes.map(mode => (
                <td
                  key={`${mode}.walktime`}
                  className="px-6 py-4 text-left whitespace-normal"
                >
                  {data[0][`${mode}.walktime`] + data[0][`${mode}.waittime`]} min
                </td>
              ))}
          </tr>
          <tr className="bg-gray-50 border-b border-gray-200 hover:bg-yellow-200">
            <td className="px-6 py-4 text-left whitespace-normal text-yellow-600">
              Possible delay due to <br/> traffic congestion or other uncertainties
            </td>
            {modes &&
              modes.map(mode => (
                <td
                  key={`${mode}.tvariab`}
                  className="px-6 py-4 text-left whitespace-normal"
                >
                  ..upto {data[0][`${mode}.tvariab`]} more
                </td>
              ))}
          </tr>
          <tr className="bg-gray-50 border-b border-gray-200 hover:bg-yellow-200">
            <td className="px-6 py-4 text-left whitespace-normal text-red-600">
              Extent of crowding in the vehicle
            </td>
            {modes &&
              modes.map(mode => (
                <td
                  key={`${mode}.crowd`}
                  className="px-6 py-4 text-left whitespace-normal"
                >
                  { data[0][`${mode}.crowd`] ? crowd_json[data[0][`${mode}.crowd`]] : ""}
                </td>
              ))}
          </tr>
          <tr className="bg-gray-50 border-b border-gray-200 hover:bg-yellow-200">
            <td className="px-6 py-4 text-left whitespace-normal text-red-600">
            Service type
            </td>
            {modes &&
              modes.map(mode => (
                <td
                  key={`${mode}.serv`}
                  className="px-6 py-4 text-left whitespace-normal"
                >
                  { data[0][`${mode}.serv`] ? servtype_json[data[0][`${mode}.serv`]] : ""}
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;