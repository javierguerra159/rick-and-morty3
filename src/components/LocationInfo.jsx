import '../styles/locationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <article className="location">
      <h1 className="location__name">{location?.name}</h1>
      <ul className="location__list">
        <li className="location__item"><span className="location__label">type: </span>{location?.type}</li>
        <li className="location__item"><span className="location__label">dimension: </span>{location?.dimension}</li>
        <li className="location__item"><span className="location__label">population: </span>{location?.residents.length}</li>
      </ul>

    </article>
  )
}

export default LocationInfo
