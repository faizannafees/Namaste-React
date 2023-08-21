
const heading = React.createElement(
    "div",
    {
        id : "container"
    },
    [
        React.createElement(
            "h1",
            {},
            "Namaste React"
        ),
        React.createElement(
            "h2",
            {},
            "Namaste React to Everyone"
        ),
        React.createElement(
            "h2",
            {},
            "Hello React"
        )
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 