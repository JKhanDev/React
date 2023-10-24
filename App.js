const heading = React.createElement("div",
{className:"Parent"},
React.createElement("div",{className:"Child"},
[React.createElement("h1",{},"I'm h1 Tag"),
React.createElement("h1",{},"I'm your sibling")])
);
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);