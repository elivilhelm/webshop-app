import React from "react";
import styles from "../styles/Home.module.css";
import DigimonImage from "./digimonImage";

const productCard = (props) => (
  <div className={styles.cardContainer}>
    <section className={styles.cardMain}>
      <a href="https://nextjs.org/docs" className={styles.cardType}>
        <p>
          <small>Digi-Egg</small>
        </p>
      </a>
      <DigimonImage/>
      <a href="https://nextjs.org/docs" className={styles.cardName}>
        <h1 className={styles.cardName}>Name</h1>
      </a>
      <a href="https://nextjs.org/docs" className={styles.cardPrice}>
        <h4 className={styles.cardName}>12.99$</h4>
      </a>
      <p>
        <small>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </small>
      </p>
    </section>
  </div>
);
export default productCard;
