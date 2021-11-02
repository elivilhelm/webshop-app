/* eslint-disable @next/next/no-img-element */
import React from "react";


export class DigimonImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      border: "5px solid #c90000",
    };
  }
  render() {
    return (
      <a href="#" className="cardImage">
        <img className="digPic" src={"./digimon.jpg"}
          alt="Digimon" style={{
            border: this.state.border,
          }}
        ></img>
      </a>
    );
  }
}
export default DigimonImage;
