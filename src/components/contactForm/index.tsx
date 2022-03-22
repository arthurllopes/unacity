import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, HStack, Input, Select, Stack, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

const Messages = {
  Success: "Mensagem enviada. Você vai receber um retorno em breve.",
  RateLimit: "Muitas mensagens, por favor espere 15 minutos antes de enviar um novo email.",
};

const ContactForm = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    ref.current?.focus();
  }, [])

  const [loading, setLoading] = React.useState(false);

  const [form, setForm] = React.useState({});

  const [response, setResponse] = React.useState<string>('');
  
  function handleFormChange (e: any) {
    const {id, value} = e.target
    setForm({...form, [id]: value})
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form)

    /*try {
      setLoading(true);

      const res = await fetch('process.env.NEXT_PUBLIC_CONTACT_URL', {
        method: "POST",
        body: JSON.stringify({
          name,
          text: message,
          email,
        }),
      });

      if (res.status === 429) {
        return setResponse({
          title: "Error!",
          body: Messages.RateLimit,
        });
      }

      const data = await res.json();

      if (data.status === "success") {
        setForm();
        setResponse(Messages.Success);
      } else {
        setResponse("Algo deu errado. Tente novamente mais tarde.");
      }
    } catch (e) {
      setResponse("Algo deu errado. Tente novamente mais tarde.")
    } finally {
      setLoading(false);
    }*/
  }
  return (
    <>
      {!response ? (
        <Box borderRadius='8px' bg='white' p={4} >
          <form onChange={handleFormChange} onSubmit={handleSubmit}>
          <VStack spacing={2}>
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Nome</FormLabel>
                <Input id='name'  placeholder='Seu nome' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='phone'>Telefone</FormLabel>
                <Input id='phone' type='tel' placeholder="22970058562" />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input id='email' type='email' placeholder="bluebill1049@hotmail.com" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='subject'>Assunto</FormLabel>
              <Select id='subject' placeholder='Selecione um assunto'>
                <option>Adicionar Negócio</option>
                <option>Anunciar</option>
                <option>Sugestões</option>
                <option>Contato profissional</option>
                <option>Outros</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='message'>Mensagem</FormLabel>
              <Textarea
                id='message'
                placeholder='Sua mensagem aqui...'
                resize='none'
              />
            </FormControl>
            <Button type="submit" w='100%' isLoading={loading} loadingText='Enviando...' leftIcon={<EmailIcon />} variant='outline'>Enviar</Button>
          </VStack>
          </form>
        </Box>
      ) : (
        <Box>
          {response}
        </Box>
      )}
    </>

  )
}

export default ContactForm