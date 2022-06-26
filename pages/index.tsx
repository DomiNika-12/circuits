import React, { useEffect, useState } from 'react';
import { PolartoRec } from '../components/PolartoRec';
import { RectoPolar } from '../components/RectoPolar';
import { Resistor } from '../components/Resistor';
import styles from '../styles/Home.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Resistor/>
      <PolartoRec/>
      <RectoPolar/>
    </div>
  );
}