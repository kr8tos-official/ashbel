import React, { Children } from "react";

const OneLayout = ({ children }) => {
  return (
    <div className="max-w-[1600px] border border-[#242424] mx-auto">
      {children}
    </div>
  );
};

export default OneLayout;
