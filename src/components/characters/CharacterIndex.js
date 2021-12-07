import React from 'react'
import CharacterCard from './CharacterCard'
import { getAllCharacters } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'



function CharacterIndex() {
  const [characters, setCharacters] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !characters && !isError
  // console.log(isError)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCharacters()
        setCharacters(res.data)
      } catch (err) {
        // console.log(err)
        setIsError(true)
      }

    }
    getData()
  }, [])
  

  return (

    
    <><div className="level">
      <div className="control">
        <div className="select is-normal">
          <select>
            <option>By Publisher</option>
            <option>With options</option>
          </select>
        </div>
      </div><div className="control">
        <div className="select is-normal">
          <select>
            <option>By Group Affiliation</option>
            <option>With options</option>
          </select>
        </div>
      </div>
      
      <div className="field has-addons">
        <div className="control is-loading">
          <input className="input is-rounded" type="text" placeholder="Find by Name"/>
        </div>
        <div className="control">
          <a className="button is-info has-background-dark">
      Search
          </a>
        </div>
      </div>
    </div>
    
    
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {isError && <Error />}
          {isLoading && <Loading />}
          {characters && (
            characters.map(character => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.images.sm} loading="lazy"
                firstAppearance={character.biography.firstAppearance}
                publisher={character.biography.publisher}
                characterId={character.id} />
            ))
          )}
        </div>
      </div>
    </section></>
  )



}
export default CharacterIndex