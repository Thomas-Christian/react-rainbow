import React, { useState } from 'react'

export default function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (CSS.supports('color', `${input}`)) {
            props.addColor(input)
        }
        
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}
