import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react'

const ToggleableForm = ({ options }) => {
    const [currentForm, setCurrentForm] = useState(0) // Change this to 1 to get the Signup form to show up
    let focusRef = useRef(0)

    const toggleForm = (idx) => {
        setCurrentForm(idx)
    }

    const toggleRef = () => {
        console.log('something')
    }
    
    return (
        <>
                {options.map((el, index) => {
                return <ButtonToggle 
                    toggleForm={toggleForm}
                    toggleRef={toggleRef} 
                    index={index} 
                    key={`button${index}`}>
                        {el.name}
                    </ButtonToggle>
            })}
            <FormToggle ref={focusRef} currentIndex={currentForm}>
                {options.map((el, index) => {
                return <div key={`form${index}`}>
                    {createElement(el.component, { })}
                </div>
                })}
            </FormToggle>
        </>
    )
}

const ButtonToggle = ({ children, toggleRef, toggleForm, index
    }) => {
    return <button onClick={() => {
      // Hmm, things should happen here
        toggleForm(index)
        toggleRef()
    }}>{children}</button>
}

const FormToggle = forwardRef(( props,ref ) => {
    if (Array.isArray(props.children)) {
        return <div ref={ref}>{props.children[props.currentIndex]}</div>
        // Remember, `children` is an array when there's multiple!
        // So, if you want to show all the forms, you just put
        // `children`.
        // What would you do if you just wanted to show one?
    }
    return null
})

export default ToggleableForm