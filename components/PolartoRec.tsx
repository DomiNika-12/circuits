import React, { FC, useState } from 'react';
import styles from '../styles/Home.module.css'

function realPart(r: number, a: number) {
  if (isNaN(r)) r = 0;
  if (isNaN(a)) a = 0;
  return r * (Math.cos(toRad(a)));
}

function imgPart(r: number, a: number) {
  if (isNaN(r)) r = 0;
  if (isNaN(a)) a = 0;
  return r * (Math.sin(toRad(a)));
}

function toRad(a: number){
  return Math.PI * a / 180;
}

export const PolartoRec: FC<{}> = props => {

  const [radius, onRadiusChange] = useState('');
  const [angle, onAngleChange] = useState('');

  return (
        <div className={styles.prContainer}>
        <span className={styles.headerText}>{`Polar to Rectangular`}</span>
        <input
            value={radius}
            type='number'
            placeholder='Radius'
            className={styles.input}
            onChange={ev => onRadiusChange(ev.target.value)}
        />
        <input
            value={angle}
            type='number'
            placeholder='Angle (deg)'
            className={styles.input}
            onChange={ev => onAngleChange(ev.target.value)}
        />
        <span className={styles.text1}> rectangular form: {realPart(parseInt(radius), parseInt(angle)).toFixed(2)} + j{imgPart(parseInt(radius), parseInt(angle)).toFixed(2)}</span>
      </div>
  );
}