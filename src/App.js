const Pet = (props) => {
return React.createElement("div", {}, [
React.createElement("h1", {}, props.name),
React.createElement("h2", {}, props.animal),
React.createElement("h2", {}, props.breed),
]);
};

// analogy: this creates a new kind of car. ex. creating honda civic as new line of cars
const App = () => {
return React.createElement("div", {}, [
React.createElement("h1", {}, "Adopt Me!"),
React.createElement(Pet, {
  name: "Paco",
  animal: "Dog",
  breed: "Chihuaha Mix",
}),
React.createElement(Pet, {
  name: "Pablo",
  animal: "Dog",
  breed: "Chihuaha Mix",
}),
React.createElement(Pet, {
  name: "Luna",
  animal: "Dog",
  breed: "Pug",
}),
]);
};

// analogy: this creates one individual car and is ready to have multiple options on that car.
ReactDOM.render(React.createElement(App), document.getElementById("root"));
