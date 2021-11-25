import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <container>
          <div
            style={{
              backgroundImage: `url("https://www.usa.skanska.com/globalassets/externalcontent2/project/wekiva-high-school/98455f5b-c838-48dd-8b5f-e7b9e0d1a63b.1.jpg?height=524&width=932&scale=both&mode=crop&bgcolor=")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "100vh",
              marginLeft: "0",
              marginRight: "0%",
            }}>
            <h1 className="text-white">
              Welcome to Lorem Ipsum School of Mechanics
            </h1>
          </div>
        </container>
      </>
    );
  }
}
