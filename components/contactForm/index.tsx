import { Box } from '@chakra-ui/react'
import React from 'react'

const ContactForm = () => {
  return (
    <Box borderRadius='0 8px 8px 0px' bg='white' p={4} >
       <form >
        <div>
          <label htmlFor="firstName">Nome</label>
          <input
            name="name"
            placeholder="Seu nome"
          />
          {true && (
            <p>Looks like there was an error: </p>
          )}
        </div>

        <div>
          <label htmlFor="email">
            Telefone*
          </label>
          <input name="email" 
            id="lastName"
            placeholder="bluebill1049@hotmail.com"
            
          />
          {true && (
            <p>Looks like there was an error: </p>
          )}
        </div>
        <div>
          <label htmlFor="email">
            Email*
          </label>
          <input name="email" 
            id="lastName"
            placeholder="bluebill1049@hotmail.com"
            
          />
          {true && (
            <p>Looks like there was an error: </p>
          )}
        </div>
        <div>
          <label htmlFor="message">Assunto</label>
          <input
            name="message"
            id="message" 
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message" 
          />
        </div>
        {true && (
          <pre style={{ textAlign: "left", color: "white" }}>
          </pre>
        )}
        <input type="submit" />
      </form> 
    </Box>
  )
}

export default ContactForm