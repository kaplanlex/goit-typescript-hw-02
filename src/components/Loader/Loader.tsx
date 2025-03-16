import { Circles } from "react-loader-spinner";
import React from "react";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Circles
        height="50"
        width="50"
        color="blue"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default Loader;
