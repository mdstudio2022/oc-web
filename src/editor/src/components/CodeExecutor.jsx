import { Button } from './Button'
import React from "react";
export const CodeExecutor = ({ srcDoc}) => (
  <div className='code-executor'>
    <iframe
      srcDoc={srcDoc}
      title='output'
      sandbox='allow-scripts'
      className='code-frame'
    />
  </div>
)
