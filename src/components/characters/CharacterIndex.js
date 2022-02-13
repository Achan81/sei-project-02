
import React from 'react'
import CharacterCard from './CharacterCard'
import { getAllCharacters } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'

function CharacterIndex() {
  const [characters, setCharacters] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [filterValue, setFilterValue] = React.useState('')
  const [publisherFilterValue, setPublisherFilterValue] = React.useState('')

  const isLoading = !characters && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCharacters()
        setCharacters(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const handleFilter = (e) => {
    setFilterValue(e.target.value)
  }

  const handlePublisherFilter = (e) => {
    setPublisherFilterValue(e.target.value)
  }
  
  const publisherNull = null 

  const filterCharacters = () => {

    console.log(filterValue)

    return characters.filter(character => {
      return (
        character.name.toLowerCase().includes(searchValue.toLowerCase()) 
        && character.biography.alignment.toLowerCase().includes(filterValue.toLowerCase()) 
        && ((character.biography.publisher && character.biography.publisher === publisherFilterValue ) || publisherFilterValue === '')
      )
    })
  }

  return (
    <><div className="level">
      <div className="control">
        <div className="select is-normal">
          <select className="filter" onChange={handlePublisherFilter}>
            <option value="">Filter by Publisher</option>
            <option>ABC Studios</option>
            <option>Angel Salvadore</option>
            <option>Ant-Man</option>
            <option>Anti-Venom</option>
            <option>Anti-Vision</option>
            <option>Archangel</option>
            <option>Aztar</option>
            <option>Batgirl</option>
            <option>Batgirl III</option>
            <option>Batgirl V</option>
            <option>Batman II</option>
            <option>Blackracer</option>
            <option>Binary</option>
            <option>Boom Boom</option>
            <option>Dark Horse Comics</option>
            <option>Deadpool</option>
            <option>DC Comics</option>
            <option>Evil Deadpool</option>
            <option>Flash IV</option>
            <option>Gemini V</option>
            <option>George Lucas</option>
            <option>Giant-Man</option>
            <option>Goliath</option>
            <option>Icon Comics</option>
            <option>IDW Publishing</option>
            <option>Image Comics</option>
            <option>Impulse</option>
            <option>Iron Lad</option>
            <option>J. K. Rowling</option>
            <option>J. R. R. Tolkien</option>
            <option>Jean Grey</option>
            <option>Marvel Comics</option>
            <option>Microsoft</option>
            <option>Meltdown</option>
            <option>Ms Marvel II</option>
            <option>Nightwing</option>
            <option>{publisherNull}</option>
            <option>NBC - Heroes</option>
            <option>Oracle</option>
            <option>Phoenix</option>
            <option>Power Man</option>
            <option>Power Woman</option>
            <option>Rebellion</option>
            <option>Red Hood</option>
            <option>Red Robin</option>
            <option>Robin II</option>
            <option>Robin III</option>
            <option>Rune King Thor</option>
            <option>Scorpion</option>
            <option>She-Thing</option>
            <option>Shueisha</option>
            <option>Sony Pictures</option>
            <option>South Park</option>
            <option>Speed Demon</option>
            <option>Spider-Carnage</option>
            <option>Spoiler</option>
            <option>Star Trek</option>
            <option>Superman Prime One-Million</option>
            <option>SyFy</option>
            <option>Tempest</option>
            <option>Titan Books</option>
            <option>Thunderbird II</option>
            <option>Toxin</option>
            <option>Universal Studios</option>
            <option>Venom III</option>
            <option>Vindicator II</option>
            <option>Wildstorm</option>
            
          </select>
        </div>
      </div>
      
      <div className="control">
        <div className="select is-normal"> 
          <select className="filter" onChange={handleFilter}>
            <option value="">Filter by Good or Bad</option>
            <option>Good</option>
            <option>Bad</option>
            <option>-</option>
          </select>
        </div>
      </div>
      
      
      <div className="field has-addons"> 
        <div className="control is-loading"> 
          <input 
            className="input is-rounded search"  
            placeholder="Find Character by Name"
            onChange={handleSearch}
          />
        </div>
      </div> 
    </div>
    
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {isError && <Error />}
          {isLoading && <Loading />}
          {characters && (
            filterCharacters().map(character => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.images.sm} loading="lazy"
                firstAppearance={character.biography.firstAppearance}
                publisher={character.biography.publisher}
                powerstatsIntelligence={character.powerstats.intelligence}
                powerstatsStrength={character.powerstats.strength}
                powerstatsSpeed={character.powerstats.speed}
                powerstatsDurability={character.powerstats.durability}
                powerstatsPower={character.powerstats.power}
                powerstatsCombat={character.powerstats.combat}
                characterId={character.id} />
            ))
          )}
        </div>
      </div>
    </section>
    </> 
  )

}
export default CharacterIndex