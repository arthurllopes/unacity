import React from 'react'
import { useBreakpointValue } from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MobileStorePage from '../../components/mobileStorePage'
import { useRouter } from 'next/router'
import { client } from '../../services/contentful'
import GoogleMap from '../../fragments/googleMap';
import Script from 'next/script';
const StorePage = () => {
  const mobile = useBreakpointValue({ base: true, sm: false, md: false })
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = React.useState<any>()
  React.useEffect(() => {
    const getStore = async () => {
      const entry = await client.getEntry(`${id}`)
      setData(entry)
    }
    if (id) {
      getStore()
    }
  }, [id])
  React.useEffect(() => {
    console.log(data)
    
  }, [data])
  if (mobile) return <MobileStorePage />
  return (
    <div style={{ height: '60vh', width: '100%' }}>
      {data && 
        'oi'
      }
      <Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&language=de`}></Script> 
    </div>
  )
}

export default StorePage