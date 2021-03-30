import React from "react";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import style from '../styles/pages/Home.module.css';
import { ChallegeBox } from "../components/ChallegeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={style.container}>

      <Head>
        <title>
          Inicio | Moveit
        </title>
      </Head>

      <ExperienceBar /> 

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div>
            <ChallegeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
