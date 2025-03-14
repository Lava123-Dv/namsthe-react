/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>this is an h1 tag <h1>
 *          <h1>this is an h1 tag <h1>
 *      <div/>
 *    <div id="child2">
 *          <h1>this is an h1 tag <h1>
 *          <h1>this is an h1 tag <h1>
 *      <div/>
 * <div/>
 * 
 */




const heading=React.createElement("div",{id:"parent"},

    [React.createElement("div",{id:"child1"},[React.createElement("h1",{},"hello this is h1 tag"),
                                            React.createElement("h2",{},"hello this is h2 tag")])], 
        [React.createElement("div",{id:"child2"},[React.createElement("h1",{},"hello this is h1 tag"),
                                             React.createElement("h2",{},"hello this is h2 tag")]
)]);

// due to this JSX came into exitant
console.log(heading);// object 
      
const root=ReactDOM.createRoot(document.getElementById("root"));
 
root.render(heading);