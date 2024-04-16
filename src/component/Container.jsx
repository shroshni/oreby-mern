import React from 'react'

const Container = ({children}) => {
  return (
    <div className="max-w-container bg-red-500 h-2 mx-auto">{children}</div>
  );
};

export default Container;