import { useState } from "react"
import { useMoralis } from "react-moralis"

function Home(){
    const {
        isAuthenticated,
        authenticate,
        isAuthenticating,
        user,
        logout,
        isLoggingOut,
        setUserData,
        isUserUpdating
    } = useMoralis()

    const [inputValue, setInputValue] = useState('')

    console.log(isAuthenticated)

    if(!isAuthenticated){
        return(
            <button onClick={() => authenticate({
                type: "sol",
                signingMessage: "Vance React Moralis Solana Authentication App wants to connect"
            })} disabled={isAuthenticating}>Authenticate</button>
        )
    }
    return (
        <div>
            <p>Hello, World</p>
            <p>Welcome Dear {user.getUsername()}</p>
            <p>Phantom Wallet Address: {user.get('solAddress')}</p>
            <form onSubmit={e => {
                e.preventDefault()
                if(inputValue.trim() !== ''){
                setUserData({
                    username: inputValue
                })
                }
            }}>
                <input placeholder="MagicEden" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit" disabled={isUserUpdating}>Change Username</button>
            </form>
            <button onClick={logout} disabled={isLoggingOut}>Logout</button>
        </div>
    )
}

export default Home;
