import { Link } from 'react-router-dom'

function CharacterCard({ 
  name, image, powerstatsIntelligence, powerstatsStrength, powerstatsSpeed,
  powerstatsDurability, powerstatsPower, powerstatsCombat, firstAppearance, publisher,
  characterId }) {

  return (
    <div className="column 
      is-full-mobile
      is-half-tablet 
      is-one-third-desktop
      is-one-quarter-widescreen 
      is-one-fifth-fullhd
      ">
      
      <Link to={`/characters/${characterId}`}>
        <div className="card bebas-font sub-space">
          <div className="card-header">
            <h3 className="card-header-title is-uppercase bebas-font">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="card-content has-text-centered">
            <h5 className="is-italic">{firstAppearance}</h5>
            <h5 className="has-text-weight-semibold is-uppercase title is-5">({publisher})</h5>
            <hr/>
            <h6>Intelligence : {powerstatsIntelligence}</h6>
            <h6>Strength : {powerstatsStrength}</h6>
            <h6>Speed : {powerstatsSpeed}</h6>
            <h6>Durability : {powerstatsDurability}</h6>
            <h6>Power : {powerstatsPower}</h6>
            <h6>Combat : {powerstatsCombat}</h6>
          </div> 
        </div>
      </Link>

    </div>
  )
}
export default CharacterCard


