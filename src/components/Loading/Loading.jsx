import React from "react";
import ReactLoading from "react-loading";
import './Loading.css';

const Loading = () => {
  return (
    <div>
      <ReactLoading type="bubbles" color="#000000" className="loading" height={100} width={50} />
    </div>
  );
};

export default Loading;
