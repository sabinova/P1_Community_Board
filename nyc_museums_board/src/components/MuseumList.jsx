import MuseumCard from './MuseumCard';

function MuseumList({museums}) {
    return (
        <div className="museum-list">
            {museums.map((museum) => (
                <MuseumCard key={museum.id} museum={museum} />
            ))}
        </div>
    );
}

export default MuseumList;