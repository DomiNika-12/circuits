import React, { FC, useState } from 'react';
import styles from '../styles/Home.module.css'


function toDeg(a: number){
  return 180 * a / Math.PI;
}

function magPart(r: number, i: number) {
  if (isNaN(r)) r = 0;
  if (isNaN(i)) i = 0;
  return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2));
}

function angPart(r: number, i: number) {
  if (isNaN(r)) r = 0;
  if (isNaN(i)) i = 0;
  return toDeg(Math.atan(i/r));
}

export const RectoPolar: FC<{}> = props => {

  const [real, onRealChange] = useState('');
  const [img, onImgChange] = useState('');

  return (
     <div className={styles.rpContainer}>
        <span className={styles.headerText}>{`Rectangular to Polar`}</span>
        <input
            value={real}
            type='number'
          placeholder='Real'
          className={styles.input}
            onChange={ev => onRealChange(ev.target.value)}
          />
        <input
            value={img}
            type='number'
          placeholder='Imaginary'
          className={styles.input}
            onChange={ev => onImgChange(ev.target.value)}
          />
        <span className={styles.text1}> polar form: {magPart(parseInt(real), parseInt(img)).toFixed(2)} ∠ {angPart(parseInt(real), parseInt(img)).toFixed(2)}˚</span>
      </div>
  );
}