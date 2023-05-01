import { Button } from './Button';
import React, {useRef, useState} from "react";
import {ThemeSelector} from "./ThemeSelector";
const tabs = ['HTML', 'CSS', 'JS'];
const fSizes = [10,11,12,13,14,16,18,20,24,28,32,36];

export const Tabs = ({ mode, setMode, runCode }) => {
  const changeMode = ({ target: { textContent } }) => {
    setMode(textContent.toLowerCase())
  }
  const fSizeSelect = ({target: {value}}) => {
      fSizeSet(value);
  };
  function fSizeSet(val){
  }
  return (
      <>
        <div className='tabs'>
          {tabs.map((m) => (
              <Button
                  key={m}
                  title={m}
                  onClick={changeMode}
                  className={m.toLowerCase() === mode ? 'current' : ''}
              />
          ))}
        </div>
        <div className='font-size'>
          <label htmlFor='font-size-selector'>Theme: </label>
          <select id='font-size-selector' name='fSize' onChange={fSizeSelect}>
            {fSizes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
            ))}
          </select>
        </div>
      </>
  )
}
