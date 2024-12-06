/*

<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>   ---> To pass multiple children wrap it in array as array of children
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>   ---> To pass multiple children wrap it in array as array of children
    </div>
</div>

ReactElement(object) => HTML(Browser understands)

*/

/* The `const parent` declaration is creating a React element representing a parent `<div>` element
with the id "parent" and containing two child `<div>` elements with ids "child" and "child2". Each
child `<div>` element contains an `<h1>` and an `<h2>` element. */
const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [
        React.createElement(
            "div", 
            {id:"child"}, 
            [React.createElement("h1", {}, "I am h1 tag"), 
            React.createElement("h2", {}, "I am h2 tag")]
        ),
        React.createElement(
            "div", 
            {id:"child2"}, 
            [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
        )
    ]
);

//  JSX

// root.render(parent);


const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React");
// Props are arguments passed into React components.
console.log(heading)    // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  // render helps to convert object into tags