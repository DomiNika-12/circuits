import React, { FC, useEffect, useState } from 'react';
import { Square } from './Square';
import styles from '../styles/Home.module.css'

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

export const Resistor: FC<{}> = props => {

const [resistance, onResistanceChange] = useState('');
const [colorOne, onColOneChange] = useState('white');
const [colorTwo, onColTwoChange] = useState('white');
const [colorThree, onColThreeChange] = useState('white');
  
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

    useEffect(() => {
    let nums = resistance.split('');
    if (nums.length != 0){
      let firstDig: number = parseInt(nums?.shift() ?? '');
      let secondDig: number = parseInt(nums?.shift() ?? '');
      let mult: string = nums.join('');
      onColOneChange(getColorFromInput(firstDig));
      onColTwoChange(getColorFromInput(secondDig));
      detMult(mult);
    }
    }, [resistance])
  
  return (<div className={styles.resistorContainer}>
    <div className={styles.resistorBox1}>
      <span className={styles.headerText}>Resistance (Ohm)</span>
      <input
        value={resistance}
        type='numeric'
        placeholder='100 Ohm'
        className={styles.input}
        onChange={ev => onResistanceChange(ev.target.value)}
      />
    </div>

    <div className={styles.resistorBox3}>
      <Square color={colorOne} />
      <Square color={colorTwo} />
      <Square color={colorThree} />
    </div>
  </div>);
}