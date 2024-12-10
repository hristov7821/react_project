import audipic from './assets/audilogo.png'
function AudiCard(){

    return(
        <div className="card">
            <img className="card-image" src={audipic} alt="Audi picture"></img>
            <h2 className="card-title">Audi</h2>
            <p className="card-text">Choose Audi car</p>

        </div>
    );

}

export default AudiCard