const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        className  : "Class"
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
        className  : "Class"
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1,heading2]
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById('root'));

//Passing react element into the root
root.render(container);

