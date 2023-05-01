import { useState } from 'react'
import { Tabs } from './src/components/Tabs'
import { CodeEditor } from './src/components/CodeEditor'
import { CodeExecutor } from './src/components/CodeExecutor'
import React from "react";
const initialHTML = '<h1>hi</h1>'
const initialCSS = `
h1 {
  color: green;
}
`
const initialJavaScript = `
document.querySelector("h1").addEventListener('click', function () {
  this.textContent = "bye"
  this.style.color = "red"
}, { once: true })
`

export default function Editor() {
    const [mode, setMode] = useState('html')
    const [html, setHtml] = useState(initialHTML)
    const [css, setCss] = useState(initialCSS.trim())
    const [js, setJs] = useState(initialJavaScript.trim())
    const [srcDoc, setSrcDoc] = useState('')

    const runCode = () => {
        setSrcDoc(
            `<html>
                        <style>${css}</style>
                        <body>${html}</body>
                        <script>${js}</script>
                   </html>`
        )
    }

    const propsByMode = {
        html: {
            mode: 'xml',
            value: html,
            setValue: setHtml
        },
        css: {
            mode: 'css',
            value: css,
            setValue: setCss
        },
        js: {
            mode: 'javascript',
            value: js,
            setValue: setJs
        }
    }

    return (
        <div className="edit-main">
            <div className="colhandle">
                <div className="row">
                    <Tabs mode={mode} setMode={setMode} />
                </div>
                <div className="colhandle1">
                    <div className="colm-1">
                        <CodeEditor {...propsByMode[mode]}  runCode={runCode}/>
                    </div>
                    <div className="colm-2">
                        <CodeExecutor srcDoc={srcDoc} runCode={runCode} />
                    </div>
                </div>
            </div>
        </div>
    )
}
// <div className="app">
// </div>
// <div className="row">
//
// </div>
// <div className="next-row-handler">
//     <div className="e-col1">
//
//     </div>
//     <div className="e-col2">
//
//     </div>
// </div>
    /*
    * <h1> React Code Editor </h1>
        <Tabs mode={mode} setMode={setMode} />
        <div className="code_edit_container">
            <CodeEditor {...propsByMode[mode]}  runCode={runCode} />
            <CodeExecutor srcDoc={srcDoc} runCode={runCode} />
        </div>
    * */