import { StylesContext } from "@material-ui/styles";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import AppBarHeader from "../components/header";
import styles from "../styles/Home.module.scss";
import Products from "./products";
const Home = (props) => {
  console.log("propsss", props);
  const token = useSelector((state) => state.userReducer.token);
  return (
    <main className={styles.container}>
      <Head>
        <title>Qmeter Food App</title>
        <meta name="description" content="Qmeter Food App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {token ? (
        <Products />
      ) : (
        <Fragment>
          <AppBarHeader />
          <div className={styles.bgImage}>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                Qmeter Food App
                <div className={styles.subtitle}>Lorem Ipsum</div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </main>
  );
};

export default Home;
