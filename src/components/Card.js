import "./card.css"
export default function Card ({img,name,rating,fees}) {
    return (
        <div className="card">
            <img className="card-image" src={img} alt="michal" />
            <h3>{name}</h3>
            <h3>{rating}</h3>
            <h3>{fees}</h3>
        </div>
    )
}