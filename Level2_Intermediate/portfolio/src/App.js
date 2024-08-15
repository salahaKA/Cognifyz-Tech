import React from "react";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  const uname = "Kadeejath Salaha";
  return (
    <MainLayout>
      {/* Main components content */}
      <div>
        <h1>
          Hiii, This is {uname}. <br></br> Welcome to My Portfolio
        </h1>
      </div>
    </MainLayout>
  );
}

export default App;
