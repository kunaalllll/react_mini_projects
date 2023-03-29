import React, { Component } from "react";
import Info from "./components/ninja/Info";
import AddNinja from "./components/ninja/AddNinja";
import Timer from "./components/timer/Timer";
import Greeter from "./components/greeter/Greeter";
import { Bmi } from "./components/bmi calculator/Bmi";
import Layout from "./components/router/Layout";
import Search from "./components/search items/Search";
import { Users } from "./components/search items/Data";
import Table from "./components/search items/Table";

class App extends Component {
  // state = {
  //   ninjas: [
  //     { name: "Kunal", age: 22, belt: "black", id: 1 },
  //     { name: "Tanmay", age: 25, belt: "green", id: 2 },
  //     { name: "minor", age: 18, belt: "pink", id: 3 },
  //   ],
  // };
  // addNinja = (ninja) => {
  //   // console.log(ninja);
  //   ninja.id = Math.random();
  //   let ninjas = [...this.state.ninjas, ninja];
  //   this.setState({
  //     ninjas: ninjas,
  //   });
  // };
  // deleteNinja = (id) => {
  //   // console.log(id);
  //   let ninjas = this.state.ninjas.filter((ninja) => {
  //     return ninja.id !== id;
  //   });
  //   this.setState({
  //     ninjas: ninjas,
  //   });
  // };
  // componentDidMount() {
  //   console.log("Component Mounted");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Component Updated");
  //   console.log(prevProps, prevState);
  // }
  render() {
    return (
      <div className="App">
        {/* <Info deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} /> */}
        <Search Users={Users} />
      </div>
    );
  }
}

export default App;
