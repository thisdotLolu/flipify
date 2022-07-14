import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/createproject.module.css";
import DashboardNav from "../Components/DashboardNav/DashboardNav";

function CreateAProject() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create a New Project - Flipify</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>&nbsp;</div>
      <div className={styles.gridContainer}>
        <DashboardNav />
      </div>
    </div>
  );
}

export default CreateAProject;
