import React, { FC } from 'react';

export const Square: FC<{color: string}> = props => {
  return <div style={{
    backgroundColor: props.color,
    borderRadius: 20,
    borderColor: '#9a8f97',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 50,
    height: 100,
    margin: 5,
  }}></div>
}