import bmwpic from './assets/bmwlogo.png';

function BmwCard() {
  return (
    <div className="card">
      <img className="card-image" src={bmwpic} alt="BMW picture" />
      <h2 className="card-title">BMW</h2>
      <p className="card-text">Choose BMW car</p>
    </div>
  );
}

export default BmwCard;
