import { Link } from 'react-router-dom'

function CharacterCard({ 
  name, image, powerstatsIntelligence, powerstatsStrength, powerstatsSpeed,
  powerstatsDurability, powerstatsPower, powerstatsCombat, firstAppearance, publisher,
  characterId }) {

  return (
    <div 
      className="column is-one-fifth is-one-third-tablet "
    >
      <Link to={`/characters/${characterId}`}>
        <div className="card bebas-font">
          <div className="card-header">
            <h3 className="card-header-title is-uppercase bebas-font heading-name">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="card-content has-text-centered">
            <h5 className="is-italic">{firstAppearance}</h5>
            <h5 className="has-text-weight-semibold is-uppercase">({publisher})</h5>
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


