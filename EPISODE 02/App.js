import React from "react";
import ReactDOM from "react-dom/client";
//After importing [React] and [ReactDOM] -> ERROR : Browser scripts cannot have imports or exports.

const parent = React.createElement("div", {id: "parent"}, [ 
    
        React.createElement("div", {id: "child1"}, [
    
            React.createElement("h1", {}, "Namaste React 🚀"),
            React.createElement("h2", {}, "By Rohit Singh") 
        ]),
        React.createElement("div", {id: "child2"}, [ 
    
            React.createElement("h1", {},"I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag") 
        ]),
        
    ]);
    
    console.log(parent);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent);
    