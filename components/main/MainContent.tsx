import React from 'react';

const MainContent = () => {
  const displayInfo = (data: string) => {
    console.log(`Displaying ${data}`);
    return `Displaying ${data}`;
  };

  return (
    <div>
      <p>{displayInfo('Hello i`m p tag')}</p>

      <h1>{displayInfo('Hello i`m h1 tag')}</h1>

      <b>{displayInfo('Hello i`m b tag')}</b>
    </div>
  );
};

export default MainContent;
