import React, { FC } from 'react';

export const Square: FC<{color: string}> = props => {
  return <div style={{
    backgroundColor: props.color,
    borderRadius: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    width: 50,
    height: 100,
    margin: 5,
  }}></div>
}