
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function Auth() {
    const navigate = useNavigate();
    const regex = /&code=(.*?)&/;
    const token = regex.exec(window.location.href)[1].replace('%2F','/')
    console.log(window.location.href)
    console.log(token)
    fetch("https://backend.sidd065.repl.co/api/auth/setToken", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        authToken: token
      }),
    });
    useEffect(() => {
    navigate("/goals");
    });
    return (<></>)
}

