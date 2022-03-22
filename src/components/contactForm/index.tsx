import { EmailIcon } from '@chakra-ui/icons';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, FormControl, FormLabel, HStack, Input, Select, Stack, Textarea, VStack } from '@chakra-ui/react'
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
  const [error, setError] = React.useState<boolean>(false);

  function handleFormChange (e: any) {
    const {id, value} = e.target
    setForm({...form, [id]: value})
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form)
    try {
      setLoading(true);

      const res = await fetch('/api/email', {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
      });

      if (res.status === 429) {
        setError(true)
        return setResponse(Messages.RateLimit)
      }

      if (res.status === 200) {
        setForm({});
        setResponse(Messages.Success);
      } else {
        setError(true)
        setResponse("Algo deu errado. Tente novamente mais tarde.");
      }
    } catch (e) {
      setResponse("Algo deu errado. Tente novamente mais tarde.")
      setError(true)
    } finally {
      setLoading(false);
    }
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
          <Alert
            status={!error ? 'success' : 'error'}
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            minH='100%'
            borderRadius='8px'
          >
            <AlertIcon boxSize='40px' />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              {!error ? 'Enviado!' : 'Oops!'}
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              {response}
            </AlertDescription>
          </Alert>
      )}
    </>

  )
}

export default ContactForm