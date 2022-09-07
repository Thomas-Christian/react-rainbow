import React from 'react'

export default function ColorBlock(props) {
    return (
        <div className='colorBlock' style={{'backgroundColor': props.color}}> 
            <p>{props.color}</p>
        </div>
    )
}