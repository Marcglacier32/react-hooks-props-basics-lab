import React from "react";
import Home from "./Home";
import About from "./About";

const user = {
  name: "Marc Thiongo",
  city: "Nairobi",
  bio: "Aspiring web developer passionate about React.",
  github: "https://github.com/Marcglacier32",
  linkedin: "https://linkedin.com/in/marc-thiongo"
};

function App() {
  return (
    <div>
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
