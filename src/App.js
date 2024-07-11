import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/heroSection/card";

function App() {
  return (
    <>
      <Navbar />
      <Card
        className="flex items-center  bg-gray-100"
        title="Card Title"
        text="When trying to reach, engage, and convert donors, an optimized donation page is essential.
         It’s the foundation of your online fundraising strategy and the place donors will go when,
         they feel compelled to give.But if making their donation is difficult or disjointed.When
          trying to reach, engage, and convert donors, an optimized donation page is essential. 
          It’s the foundation of your online fundraising strategy and the place donors will go when,
           they feel compelled to give.But if making their donation is difficult or disjointed."
        buttonText="Click Me"
      />
    </>
  );
}

export default App;
