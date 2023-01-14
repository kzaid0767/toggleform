import { forwardRef, useState, useEffect } from "react";

const SignupForm = forwardRef((props, ref) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleUsername = (e) => {
        setUsername(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(()=>{
        ref.current.focus()
    },[])

    return <div className="forms">
        <input onChange={handleEmail} ref={ref} type="email" value={email} placeholder="Email" />
        <input onChange={handleUsername} type="text" value={username} placeholder="Username" />
        <input onChange={handlePassword} type="password" value={password} placeholder="Password" />
        <button>Submit</button>
    </div>
})

export default SignupForm