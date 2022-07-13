import React, { useState } from "react";
import Head from "next/head";
import HProviders from "../Components/hostingProviders/hostProviders/hProviders";
import providersDetails from "../Components/hostingProviders/hostProviders/providersDetails";
import HArchi from "../Components/hostingProviders/hArchitecture/hArchi";
import archiDetails from "../Components/hostingProviders/hArchitecture/archiDetails";
import styles from "../styles/selectHost.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { HArchiArrow } from "../Components/SVG/Svgs";
import Nav from "../Components/Nav/Nav";

function hostCard(prop) {
  return <HProviders key={prop.id} image={prop.image} />;
}

function archiCard(prop) {
  return <HArchi key={prop.id} image={prop.image} />;
}

function SelectHost() {
  const [activeHost, setActiveHost] = useState(false);
  return (
    <div>
      <Head>
        <title>Choose Hosting Provider - Flipify</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.containerParent}>
        <Nav />
        <section className={styles.host__section}>
          <h2>Select your current hosting provider</h2>
          <div className={styles.hostParent}>
            <Container>
              <Row>{providersDetails.map(hostCard)}</Row>
            </Container>
          </div>
        </section>

        <section className={styles.host__section}>
          <h2>Select your site architecture</h2>
          <div className={styles.host__archiParent}>
            <div className={styles.host__archiFlex}>
              <div className={styles.host__archiDetails}>
                <Container>
                  <p className={styles.host__stack}>Frontend</p>
                  <Row>{archiDetails.map(archiCard)}</Row>
                </Container>
              </div>
              <HArchiArrow className={styles.host_archiArrow} />
              <div className={styles.host__archiDetails}>
                <Container>
                  <p className={styles.host__stack}>Backend</p>
                  <Row>{archiDetails.map(archiCard)}</Row>
                </Container>
              </div>
              <HArchiArrow className={styles.host_archiArrow} />
              <div className={styles.host__archiDetails}>
                <Container>
                  <p className={styles.host__stack}>Database</p>
                  <Row>{archiDetails.map(archiCard)}</Row>
                </Container>
              </div>
            </div>
            <button className={styles.host__NextBtn}>Next</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SelectHost;
