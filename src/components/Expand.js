import './Expand.css'
import { useState } from 'react'


const Expand = () => {
    const [expand, setExpand] = useState(false)
    const open = () => {
        setExpand(!expand)
    }

    return (
        <section>
            <article className='question'>
                <p>Why is React great?</p>
                <button onClick={open}>+</button>
            </article>
            <article className='answer' style={!expand ? { display: 'none' } : { display: 'block' }}>
                <p>Fast Learning Curve</p>
            </article>
        </section>
    )
}

export default Expand