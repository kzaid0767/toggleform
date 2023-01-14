import React, {useState} from 'react'

function SignupForm() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange =(e) => {
        setEmail(e.target.value)
    }

    const handleTextChange =(e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='signupform'>
            <input type="email" onChange={handleEmailChange} value={email} placeholder="Email" />
            <input type="text" onChange={handleTextChange} value={username} placeholder="Username" />
            <input type="password" onChange={handlePasswordChange} value={password} placeholder="Password" />
            <button>Submit</button>
        </div>
    )
}

export default SignupForm