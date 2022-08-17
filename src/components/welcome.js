import { useState } from "react"
export const Welcome = () => {
    const [message, setMessage] = useState('new message')
    return (
        <div>
            <h1>{message}</h1>
            <button  className="btn btn-info" onClick={() => setMessage('welcome Meghana')}>click</button>
        </div>
        
    )
}
