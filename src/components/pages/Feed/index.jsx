import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { TrackSection } from '../../../../src/components/TrackSection';
import { Loaging } from '../../Loading';
import { Header } from '../../Header';



export const Feed = () => {
  const [tracks, setTrack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  console.log('Feed')

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await api.get('/tracks', {
          params: {
            name_like: search,
          }
        })
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
  }, [search])

  const handleForm = (inputSearch) => {
    setSearch(inputSearch)
  }

  if (isLoading) {
    return <Loaging />
  }
  return (
    <>
      <Header callback={handleForm} />
      <TrackSection tracks={tracks} />
    </>
  )
}