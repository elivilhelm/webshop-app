import React from "react";
import { render } from "react-dom";
import styles from "../styles/Home.module.css";

export class DigimonImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      border: "5px solid #c90000",
    };
  }
  render() {
    return (
      <a href="https://nextjs.org/docs" className={styles.cardImage}>
        <img
          className={styles.digPic}
          src={"./digimon.jpg"}
          alt="Digimon"
          style={{
            border: this.state.border,
          }}
        ></img>
      </a>
    );
  }
}
export default DigimonImage;
