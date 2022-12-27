import React from 'react';

const MainContent = () => {
  const displayInfo = (data: string) => {
    console.log(`Displaying ${data}`);
    return `Displaying ${data}`;
  };

  return (
    <div>
      <p>{displayInfo('kljhklj;kjklhkj')}</p>
    </div>
  );
};

export default MainContent;
