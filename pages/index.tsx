import React, { useState } from 'react';
import { Square } from '../components/Square';
import styles from '../styles/Home.module.css'

export default function App() {
  const [resistance, onResistanceChange] = useState('');
  const [colorOne, onColOneChange] = useState('white');
  const [colorTwo, onColTwoChange] = useState('white');
  const [colorThree, onColThreeChange] = useState('white');
  const [radius, onRadiusChange] = useState('');
  const [angle, onAngleChange] = useState('');
  const [real, onRealChange] = useState('');
  const [img, onImgChange] = useState('');

  function getColorFromInput(x: number){
    switch(x){
      case 0:
        return 'black';
      case 1:
        return 'brown';
      case 2:
        return 'red';
      case 3:
        return 'orange';
      case 4:
        return 'yellow';
      case 5:
        return 'green';
      case 6:
        return 'blue';
      case 7:
        return 'purple';
      case 8:
        return 'grey';
      case 9:
        return 'white';
      default:
        return 'black';
    }
  }

  function detMult(x: string){
    if (x.length === 0){
      onColThreeChange('white')
        return;
    }
    // Check for invalid input - TO DO
    if (x === "0"){ onColThreeChange('brown')}
    else if (x === "00"){ onColThreeChange('red')}
    else if (x === "000"){ onColThreeChange('orange')}
    else if (x === "0000"){ onColThreeChange('yellow')}
    else if (x === "00000"){ onColThreeChange('green')}
    else if (x === "000000"){ onColThreeChange('blue')}
  }

  function setColors(){
    let nums = resistance.split('');
    if (nums.length != 0){
      let firstDig: number = parseInt(nums?.shift() ?? '');
      let secondDig: number = parseInt(nums?.shift() ?? '');
      let mult: string = nums.join('');
      onColOneChange(getColorFromInput(firstDig));
      onColTwoChange(getColorFromInput(secondDig));
      detMult(mult);
    }
  }
  
  function realPart(r: number, a: number){
    return r * (Math.cos(toRad(a)));
  }

  function imgPart(r: number, a: number){
    return r * (Math.sin(toRad(a)));
  }

  function toRad(a: number){
    return Math.PI * a / 180;
  }

  function toDeg(a: number){
    return 180 * a / Math.PI;
  }

  function magPart(r: number, i: number){
    return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2));
  }
  function angPart(r: number, i: number){
    return toDeg(Math.atan(i/r));
  }

  return (
    <div className={styles.container}>
      <span className={styles.headerText}>Resistor</span>
         
      <div style={{flexDirection: 'row', padding: 20, width: '100%'}}>
        <div style={{alignItems: 'center', padding: 20}}>
          <span className={styles.text1}>Resistance (Ohm)</span>
          <input
            value={resistance}
            type='numeric'
            placeholder='100 Ohm'
            onChange={ev => onResistanceChange(ev.target.value)}
            style={{padding: 10, margin: 20}}
          />
        </div>

        <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
          <button className={styles.button} onClick={setColors}>
            <span className={styles.text}>Calculate</span>
          </button>
        </div>
        
        <div style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
            <Square color={colorOne}/>
            <Square color={colorTwo}/>
            <Square color={colorThree}/>
        </div>

      </div>

      <span className={styles.headerText}>{`Polar - > Rectangular`}</span>
      <div>
        <input
            value={radius}
            type='numeric'
            placeholder='Radius'
            onChange={ev => onRadiusChange(ev.target.value)}
            style={{padding: 10, margin: 20}}
          />
          <input
            value={angle}
            type='numeric'
            placeholder='Angle (deg)'
            onChange={ev => onAngleChange(ev.target.value)}
            style={{padding: 10, margin: 20}}
          />
          <span className={styles.text1}> Rectangular form: {realPart(parseInt(radius), parseInt(angle))} + j {imgPart(parseInt(radius), parseInt(angle))}</span>
      </div>
      <span className={styles.headerText}>{`Rectangular - > Polar`}</span>
      <input
            value={real}
            type='numeric'
            placeholder='Real'
            onChange={ev => onRealChange(ev.target.value)}
            style={{padding: 10, margin: 20}}
          />
        <input
            value={img}
            type='numeric'
            placeholder='Imaginary'
            onChange={ev => onImgChange(ev.target.value)}
            style={{padding: 10, margin: 20}}
          />
        <span className={styles.text1}> Polar form: {magPart(parseInt(real), parseInt(img))} /_ {angPart(parseInt(real), parseInt(img))} (deg)</span>
    </div>
  );
}