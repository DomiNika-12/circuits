import React, { useEffect, useState } from 'react';
import { PolartoRec } from '../components/PolartoRec';
import { RectoPolar } from '../components/RectoPolar';
import { Resistor } from '../components/Resistor';
import styles from '../styles/Home.module.css'
import { FcSettings } from 'react-icons/fc' 
import { IconContext } from 'react-icons'

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <IconContext.Provider value={{className: "iconsTopBar" }}>
        <FcSettings/>
      
         </IconContext.Provider>
        <span className={styles.topBarText}>eeAID</span>
      </div>
      <Resistor/>
      <PolartoRec/>
      <RectoPolar />
      <div className={styles.footer}>
        <p className={styles.footerText}>{`By `}
        <a href='https://dominikabobik.com/' target={"_blank"} rel={"noreferrer"} className={styles.footerText}>{` Dominika Bobik`}</a>
        </p>
      </div>
    </div>
  );
}