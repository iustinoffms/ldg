import React from "react";

import { TailSpin } from "react-loader-spinner";

interface LoadingProps {
  isLoading: boolean;
  error: "string";
}
const BeforePlayDisplay = (props: LoadingProps) => {
  const { isLoading, error } = props;

  return isLoading ? (
    <div className="flex justify-center items-center h-full">
      <TailSpin
        height="300"
        width="300"
        color="#eebbc3"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">{error}</div>
  );
};

export default BeforePlayDisplay;
