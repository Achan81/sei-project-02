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
              <h4 className="title has-text-centered">{character.name}</h4>
              <hr/>

              <div className="columns">
                <div className="column is-half">
                  <figure className="image">
                    <img src={character.images.lg} alt={character.name}/>
                  </figure>
                  <Link to="/ProfileCompare">
                    <button className="button is-fullwidth is-dark">Compare Powerstats</button>
                  </Link>
                </div>

                <div className="columns">
                  <div className="column">
                    <h2 className="title is-4 has-text-centered">Powerstats</h2> 
                  
                    <div className="columns is-mobile">
                      <div className="column"> Intelligence
                        <h3 className="title is-4 has-text-centered">{
                          character.powerstats.intelligence}</h3>
                      </div>

                      <div className="column"> Strength
                        <h3 className="title is-4 has-text-centered">{
                          character.powerstats.strength}</h3>
                      </div>
                      <div className="column"> Speed
                        <h3 className="title is-4 has-text-centered">{
                          character.powerstats.speed}</h3>
                      </div>

                      <div className="column"> Durability
                        <h3 className="title is-4 has-text-centered">{
                          character.powerstats.durability}</h3>
                      </div>

                      <div className="column"> Power
                        <h3 className="title is-4 has-text-centered">{
                          character.powerstats.power}</h3>
                      </div>

                      <div className="column"> Combat
                        <h3 className="title is-4 has-text-centered">{
                          character.powerstats.combat}</h3>
                      </div>
                    </div> 
                    <hr/>

                    <div className="column"> 
                      <h4 className="title is-6 has-text-centered">Full Name : {
                        character.biography.fullName}</h4>
                      <h4 className="title is-6 has-text-centered">Gender : {
                        character.appearance.gender}</h4>
                      <h4 className="title is-6 has-text-centered">Race : {
                        character.appearance.race}</h4>
                      <h4 className="title is-6 has-text-centered">Height : {
                        character.appearance.height[0]}</h4>
                      <h4 className="title is-6 has-text-centered">Weight : {
                        character.appearance.weight[0]}</h4>
                      <h4 className="title is-6 has-text-centered">Place of Birth : {
                        character.biography.placeOfBirth}</h4>
                      <h4 className="title is-6 has-text-centered">First Appearance : {
                        character.biography.firstAppearance}</h4>
                      <h4 className="title is-6 has-text-centered">Publisher : {
                        character.biography.publisher}</h4>
                      <h4 className="title is-6 has-text-centered">Alignment : {
                        character.biography.alignment}</h4>
                      <h4 className="title is-6 has-text-centered">Group Affiliation : {
                        character.connections.groupAffiliation}</h4>
                      <h4 className="title is-6 has-text-centered">Relatives : {
                        character.connections.relatives}</h4>
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


