
import useFetch from "../hooks/useFetch"
import '../styles/residentCard.css';


const ResidentCard = ({ url }) => {

  const [residents] = useFetch(url)

  

 

  

  return (
    <>
    
    <article className="resident">
      <header className="resident__header">
        <img className="resident__avatar" src={residents?.image} alt="image" />
        <div className="resident__status">
          <div className={`resident__status-circle ${residents?.status}`}></div>
          <span className="resident__status-label">{residents?.status}</span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{residents?.name}</h3>
        <hr className="resident__hr"/>
        <ul className="resident__list">
          <li className="resident__item"><span className="resident__label">Specie</span>{residents?.species}</li>
          <li className="resident__item"><span className="resident__label">Origin</span>{residents?.origin.name}</li>
        </ul>
      </section>
    </article>
    <div>
      
    </div>
    </>
  )
}

export default ResidentCard
