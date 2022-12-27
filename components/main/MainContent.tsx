import React from 'react';

const MainContent = () => {
  const displayInfo = (data: string) => {
    console.log(`Displaying ${data}`);
    return `Displaying ${data}`;
  };

  return (
    <div>
      <p>







          {displayInfo('asd')}





      </p>







      <p





      >{




          displayInfo('single quoted strings')





      }</p>
    </div




    >
  );
};

export default MainContent;
