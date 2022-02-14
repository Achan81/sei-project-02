import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getSingleCharacter } from '../../lib/api'

import Error from '../common/Error'
import Loading from '../common/Loading'

function CharacterShow() {
  // const params = useParams()
  const { characterId } = useParams()
  // const history = useHistory()
  const [character, setCharacter] = React.useState(null)
  
  const [isError, setIsError] = React.useState(false)
  const isLoading = !character && !isError
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const characterRes = await getSingleCharacter(characterId)
        setCharacter(characterRes.data)
      } catch {
        setIsError(true)
      }
    }
    getData()
  }, [characterId])
  console.log('character', character)
  // const handleCompareClick = () => {
  //   history.push(`/characters/${characterId}/profileCompare`)
  // }
  return (

    <section className="section is-half">
      <div className="container">
        {isError && <Error />}
        {isLoading && <Loading />}
        {character &&
          (
            <div className="character">
              <div className="heading-space title is-1 has-text-centered bebas-font has-text-weight-bold">{character.name}</div>
              <hr/>

              <div className="columns">
                <div className="column is-half">
                  <figure className="image">
                    <img src={character.images.lg} alt={character.name}/>
                  </figure>
                  <Link to="/ProfileCompare">
                    <button className="button is-fullwidth is-dark bebas-font heading-space">Compare Powerstats</button>
                  </Link>
                </div>

                <div className="columns bebas-font">
                  <div className="column has-text-centered">
                    <h2 className="title is-4 bebas-font heading-space">Powerstats</h2> 
                    <div className="columns is-mobile">

                      <div className="column">Intelligence
                        <div className="title is-4">{character.powerstats.intelligence}</div>
                      </div>
                      <div className="column">Strength
                        <div className="title is-4">{character.powerstats.strength}</div>
                      </div>
                      <div className="column">Speed
                        <div className="title is-4">{character.powerstats.speed}</div>
                      </div>
                      <div className="column">Durability
                        <div className="title is-4">{character.powerstats.durability}</div>
                      </div>
                      <div className="column">Power
                        <div className="title is-4">{character.powerstats.power}</div>
                      </div>
                      <div className="column">Combat
                        <div className="title is-4">{character.powerstats.combat}</div>
                      </div>
                    </div> 
                    <hr/>

                    <div className="column is-12 has-text-left"> 
                      <div className="title is-6 pb-4 sub-space">
                        <div>Full Name : {character.biography.fullName}</div><br></br>
                        <div>Gender : {character.appearance.gender}</div><br></br>
                        <div>Race : {character.appearance.race}</div><br></br>
                        <div>Height : {character.appearance.height[0]}</div><br></br>
                        <div>Weight : {character.appearance.weight[0]}</div><br></br>
                        <div>Place of Birth : {character.biography.placeOfBirth}</div><br></br>
                        <div>First Appearance : {character.biography.firstAppearance}</div><br></br>
                        <div>Publisher : {character.biography.publisher}</div><br></br>
                        <div>Alignment : {character.biography.alignment}</div><hr></hr>
                        <div>Group Affiliation : {character.connections.groupAffiliation}</div><br></br>
                        <div>Relatives : {character.connections.relatives}</div><br></br>
                      </div>
                    </div>
                    
                  </div>        
                </div>
              </div>
            </div>
          )}
        <hr/>  
      </div>
    </section>

  ) 
}
export default CharacterShow


