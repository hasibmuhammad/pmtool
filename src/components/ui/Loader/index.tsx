"use client";

import { CircleNotch } from "@phosphor-icons/react";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[90vh]">
      <CircleNotch
        size={40}
        weight="bold"
        className="animate-spin text-blue-600"
      />
    </div>
  );
};

export default Loader;
