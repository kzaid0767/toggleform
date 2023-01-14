import { forwardRef, useEffect, useState } from "react"

const LoginForm = forwardRef((props,ref) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(()=>{
        ref.current.focus()
    }, [])

    return <div className="forms">
        <input type="text" ref={ref} onChange={handleUsername} value={username} placeholder="Username" />
        <input type="password" onChange={handlePassword} value={password} placeholder="Password" />
        <button >Submit</button>
    </div>
})

export default LoginForm