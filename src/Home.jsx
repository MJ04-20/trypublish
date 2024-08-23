import React from "react";
import CitySelector from "./CitySelector";
import CatchphraseRotator from "./CatchphraseRotator";
function Home() {
  return (
    <div className="bg-scroll bg-cover"
    style={{backgroundImage: "url('/bgi.png')"}}>
            <div className="h-screen w-screen flex flex-row justify-between">
      <main className="flex-grow  flex justify-center items-center pt-20">
        
        <CitySelector />
        {/* <CatchphraseRotator /> */}
      </main>
    </div>
    </div>

  );
}

export default Home;
