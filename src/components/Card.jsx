function Card(props) {
  return (
    <div className={props.name}>
      <div className="logo"></div>
      <div className="name">{props.title}</div>
      <div className="infos">{props.infos}</div>
    </div>
  );
}

export default Card;
