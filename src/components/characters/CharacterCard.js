
import { Link } from 'react-router-dom'

function CharacterCard({ name, image, publisher, firstAppearance, characterId }) {
  return (
    <div 
      className="column is-one-fifth is-one-third-tablet"
    >
      <Link to={`/characters/${characterId}`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header-title">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <p>{firstAppearance}</p>
            <hr/>
            <h5>{publisher}</h5>
          </div> 
        </div>
      </Link>

    </div>
  )
}
export default CharacterCard


