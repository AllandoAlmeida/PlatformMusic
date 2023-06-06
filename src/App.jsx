import { useEffect, useState } from 'react'
import { api } from './services/api'
import { TrackSection } from './TrackSection'

export const App = () => {
  const [tracks, setTrack] = useState([])
  
  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await api.get('/tracks')
        setTrack(response.data)

      } catch (error) {
console.log(error)
      }

    }
    getTracks()
  }, [])

  return ( // Montagem, quando o componente esta em tela
    <>
   <TrackSection tracks={tracks}/>
    </>
  )
}
