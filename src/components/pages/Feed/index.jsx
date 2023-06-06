import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { TrackSection } from '../../../../src/components/TrackSection';
import { Loaging } from '../../Loading';
import { Header } from '../../Header';



export const Feed = () => {
  const [tracks, setTrack] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await api.get('/tracks')
        setTrack(response.data)

      } catch (error) {
        console.log(error)
      } finally {
        if (isLoading) {
          setIsLoading(false)
        }
      }

    }
    getTracks()
  }, [])

  if (isLoading) {
    return <Loaging />
  }
  return (
    <>
    <Header setInputSearch={setInputSearch}/>
      <TrackSection tracks={tracks} />
    </>
  )
}