import "./App.css";
import React from "react";
import User from "./components/UserComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      delete: false,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>User List</h1>
        <button onClick={() => this.setState({ delete: true })}>
          Delete Users
        </button>
        {/* si delete es igual a true desmonta el componente User           */}
        {this.state.delete ? null : <User />}
      </div>
    );
  }
}
export default App;
