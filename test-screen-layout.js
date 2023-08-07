const React = require("react");
const { View, Text } = require("react-native");
const { ScreenLayout } = require("./dist/src/ScreenLayout");

const App = () => {
  return React.createElement(
    ScreenLayout,
    {
      backgroundColor: "#f0f0f0",
      isWithoutScroll: false,
      screenTitle: "My Screen",
    },
    React.createElement(
      View,
      null,
      React.createElement(Text, null, "Content goes here")
    )
  );
};

const { render } = require("react-dom");
render(React.createElement(App), document.getElementById("root"));
