import React from "react";
import Counter from "./Counter"


function App() {
 return React.createElement(
    Counter,
    { initialValue: 0 }
  );
}
export default App;