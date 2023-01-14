import React, {useState} from 'react'

function LoginForm(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleTextChange =(e)=>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='loginform'>
            <input type="text" onChange={handleTextChange} value={username} placeholder="Username" />
            <input type="password" onChange={handlePasswordChange} value={password} placeholder="Password" />
            <button>Submit</button>
        </div>
    )
}

export default LoginForm