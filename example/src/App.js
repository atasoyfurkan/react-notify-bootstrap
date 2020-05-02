import React, { Component } from 'react'
import Notification, { notify } from 'react-notify-bootstrap'


class App extends Component {

  primary = () => {
    notify({ text: "Primary", variant: "primary" });
  };
  secondary = () => {
    notify({ text: "Secondary", variant: "secondary" });
  };
  success = () => {
    notify({ text: "Success", variant: "success" });
  };
  info = () => {
    notify({ text: "Info", variant: "info" });
  };
  warning = () => {
    notify({ text: "Warning", variant: "warning" });
  };
  danger = () => {
    notify({ text: "Danger", variant: "danger" });
  };
  light = () => {
    notify({ text: "Light", variant: "light" });
  };
  dark = () => {
    notify({ text: "Dark", variant: "dark" });
  };

  render() {
    return (
      <div className="container text-center" style={{ marginTop: 200 }}>
        <button className="btn btn-primary btn-lg mr-2 mb-2" onClick={this.primary}>primary</button>
        <button className="btn btn-secondary btn-lg mr-2 mb-2" onClick={this.secondary}>secondary</button>
        <button className="btn btn-success btn-lg mr-2 mb-2" onClick={this.success}>success</button>
        <button className="btn btn-info btn-lg mr-2 mb-2" onClick={this.info}>info</button>
        <button className="btn btn-warning btn-lg mr-2 mb-2" onClick={this.warning}>warning</button>
        <button className="btn btn-danger btn-lg mr-2 mb-2" onClick={this.danger}>danger</button>
        <button className="btn btn-light btn-lg mr-2 mb-2" onClick={this.light}>light</button>
        <button className="btn btn-dark btn-lg mr-2 mb-2" onClick={this.dark}>dark</button>

        <Notification />
      </div>
    )
  }
}

export default App
