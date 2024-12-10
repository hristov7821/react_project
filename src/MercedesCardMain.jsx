import benzpic from './assets/benzlogo.png'
function MercedesCard(){

    return(
        <div className="card">
            <img className="card-image" src={benzpic} alt="Mercedes picture"></img>
            <h2 className="card-title">Mercedes-Benz</h2>
            <p className="card-text">Choose Mercedes car</p>

        </div>
    );

}

export default MercedesCard