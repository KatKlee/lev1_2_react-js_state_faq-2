import './Expand.css'
import { useState } from 'react'


const Expand = () => {
    const [expand, setExpand] = useState(false)
    const button = document.getElementsByTagName('button')
    const open = () => {
        setExpand(!expand)
        setExpand2(false)
        if (!expand) {
            button[0].innerHTML = '-'
        } else {
            button[0].innerHTML = '+'
        }
        button[1].innerHTML = '+'
    }

    const [expand2, setExpand2] = useState(false)
    const openFurther = () => {
        setExpand2(!expand2)
        if (!expand2) {
            button[1].innerHTML = '-'
        } else {
            button[1].innerHTML = '+'
        }
    }

    return (
        <section>
            <article className='question'>
                <p>Why is React great?</p>
                <button onClick={open}>+</button>
            </article>
            <article className='answer' style={!expand ? { display: 'none' } : null}>
                <p>Fast Learning Curve</p>
                <button onClick={openFurther}>+</button>
            </article>
            <article className='longanswer' style={!expand2 ? { display: 'none' } : { display: 'block' }}>
                <p>
                    React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
                    As the React guide says 'Thinking in React' may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.
                </p>
            </article>
        </section>
    )
}

export default Expand