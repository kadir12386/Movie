// function
function Msg({ name, image }) {
  // const { name } = props;
  // const { image } = props;
  return (
    <div>
      <img className="profile-pic" src={image} alt={name} />
      <h2>
        <span role="img" aria-label="Girl">
          👧
        </span>
        {name} !!!
      </h2>
    </div>
  );
}
