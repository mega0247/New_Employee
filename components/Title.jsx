import React from "react";

const Title = ({ text, noUnder }) => {
  return (
    <h1
      className={`font-bold text-slate-600 mb-2 text-lg  ${
        noUnder ? `` : "underline ml-[-12px]"
      }`}
    >
      {text}
    </h1>
  );
};

export default Title;
