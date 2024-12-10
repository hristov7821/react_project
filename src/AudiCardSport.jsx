import audipic from './assets/audisportlogo.webp'
function AudiCardSport(){

    return(
        <div className="card">
            <img className="card-image" src={audipic} alt="Audi picture"></img>
            <h2 className="card-title">Sport</h2>
            <p classsName="card-text">Choose Sport car</p>

        </div>
    );

}

export default AudiCardSport