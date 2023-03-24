import React, { Component } from "react";
import Info from "./Info";
import AddNinja from "./AddNinja";
import Timer from "./Timer";
import Greeter from "./Greeter";

class App extends Component {
  state = {
    ninjas: [
      { name: "Kunal", age: 22, belt: "black", id: 1 },
      { name: "Tanmay", age: 25, belt: "green", id: 2 },
      { name: "minor", age: 18, belt: "pink", id: 3 },
    ],
  };
  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };
  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };
  componentDidMount() {
    console.log("Component Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        {/* <Info deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} /> */}

        <Greeter />
      </div>
    );
  }
}

export default App;
