
function MuseumCard({ museum }) {
    return (
        <div className="museum-card">
            <img src={museum.image} alt={museum.name} />
            <h2>{museum.name}</h2>
            <p>{museum.location}</p>
            <p>{museum.description}</p>
            <a href={museum.website}>Visit Website</a>
        </div>
    );
}

export default MuseumCard;