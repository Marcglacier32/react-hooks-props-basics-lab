import React from "react";

function Home({ name, city }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>City: {city}</p>
    </div>
  );
}

export default Home;
