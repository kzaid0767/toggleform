import { createElement, useState, useRef } from "react"

const ToggleableForm = ({ options }) => {
    const [currentForm, setCurrentForm] = useState(0) // Change this to 1 to get the Signup form to show up
    let focusRef = useRef(null)

    const toggleForm = (idx) => {
        setCurrentForm(idx)
    }

    return <>
        {options.map((el, index) => {
            return <ButtonToggle idx = {index}
            toggleForm={toggleForm}      
            key={`button${index}`}>{el.name}</ButtonToggle>
        })}
        <FormToggle currentIndex={currentForm}>
            {options.map((el, index) => {
                return <div key={`form${index}`}>
                    {createElement(el.component, { ref: focusRef })}
                </div>
            })}
        </FormToggle>
    </>
}

const ButtonToggle = ({ children, idx, toggleRef, toggleForm }) => {
    return <button onClick={() => {
        // Hmm, things should happen here
        toggleForm(idx)
    }}>{children}</button>
}

const FormToggle = ({ children, currentIndex }) => {
    if (Array.isArray(children)) {
        return <div>{children[currentIndex]}</div>
        // Remember, `children` is an array when there's multiple!
        // So, if you want to show all the forms, you just put
        // `children`.
        // What would you do if you just wanted to show one?
    }
    return null
}

export default ToggleableForm