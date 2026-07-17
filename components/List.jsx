import React from "react";

const List = ({ items }) => {
  return (
    <div>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-base text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
