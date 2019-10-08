import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NamePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
          <input
            type="text"
            value={this.props.data.name}
            onChange={event =>
              this.props.setStateFunction("name", event.target.value)
            }
          />
        </p>
        <button onClick={() => this.props.goFunction(StartPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome, {this.props.data.name}! How would you like to get to your
          destination?
        </p>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction()}>Ship</button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo train! Please make your way to your seat.
          What is the number?
        </p>
        <select
          value={this.props.data.seat}
          onChange={event =>
            this.props.setStateFunction("seat", event.target.value)
          }
        >
          <option value="12">Seat 12</option>
          <option value="13">Seat 13</option>
          <option value="14">Seat 14</option>
          <option value="15">Seat 15</option>
        </select>
        <button onClick={() => this.props.goFunction(Mistery)}>
          Next then
        </button>
      </div>
    );
  }
}

class Mistery extends Component {
  render() {
    return (
      <div className="page">
        <p>
          you met a mesterious woman sit next to you seat (which is{" "}
          {this.props.data.seat}).
        </p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
