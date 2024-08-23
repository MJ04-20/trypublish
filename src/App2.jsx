import React from 'react';

import Card from './Card.jsx';

const App2= () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-between ">
     
      <main className="flex-grow pt-10 flex justify-center items-center">

        <div className="flex space-x-4">
          <Card username="zaid" btntxt="dj" />
          <Card username="Rakhi Sawant" btntxt="dekho zara" />
          <Card username="Rakhi Sawant" btntxt="dekho zara" />
          <Card username="Rakhi Sawant" btntxt="dekho zara" />
          <Card username="Rakhi Sawant" btntxt="dekho zara" />
          <Card username="Rakhi Sawant" btntxt="dekho zara" />
        </div>
   
      </main>
    
 
    </div>
  );
}
export default App2