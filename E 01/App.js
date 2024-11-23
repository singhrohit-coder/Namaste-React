//Creating Single And Nested Element
/**                            Structure
 * <div id ="parent">
 *      <div id="child1">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h2 tag</h2>
 *      </div>
 * 
 *      <div id="child2">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 **/

 
const parent = React.createElement("div", {id: "parent"}, [ 
    // React.createElement => What is creates? It creates nothing.
    
        React.createElement("div", {id: "child1"}, [

            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag") //child 1
        ]),
        React.createElement("div", {id: "child2"}, [ 

            React.createElement("h1", {},"I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag") //child 2
            //child 1 + child 2 = multiple child/nested child.
        ]),
        
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

    
