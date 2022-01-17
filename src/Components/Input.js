import React, { useState } from 'react'

const Inputs = () => {

    const changeName = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const changeHandle = (event) => {
        console.log('change Handle Run');
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here")
    return (
        <div>
            <div className='contianer'>
                <div className='row'>
                    <div className='offset-md-4'>
                        <h1>Text Convert to Uppercase</h1>
                        <label>
                            Enter your Name : <br />
                            <textarea type="text" cols="50" rows="8" value={text} onChange={changeHandle} />
                        </label>
                        <br />
                        <button onClick={changeName}>Change to UpperCase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inputs
