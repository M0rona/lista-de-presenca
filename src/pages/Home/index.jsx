import React, { useState, useEffect } from "react";
import './style.css';
import { Card } from '../../components/Card';

export function Home() {

  const [clientName, setClientName] = useState();
  const [clients, setClients] = useState([]);
  const [user, setUser] = useState({name: '', avatar:''});

  function handleAddClient() {
    const newClient = {
      name: clientName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }

    if(newClient.name) {
      setClients(prevState => [...prevState, newClient])
    }
    
  }

  useEffect(() => {
    fetch('https://api.github.com/users/M0rona')
      .then(response => response.json())
      .then(data => {        
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  
  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença:</h1>
        <div>
          <strong>{user.name}</strong>
          <img 
            src={user.avatar} 
            alt="Foto De Perfil" 
          />
        </div>
      </header>
      
      <input 
      type="text" name="nome" id="nome"
      placeholder='Digite o nome...'
      onChange={e => setClientName(e.target.value)}
      />
      <button onClick={handleAddClient}>
        Adicionar
      </button>

      {
        clients.map(client => 
          <Card
            key={client.time}
            name={client.name} 
            time={client.time}
          />
        )
      }
    </div>
    
  )
}


