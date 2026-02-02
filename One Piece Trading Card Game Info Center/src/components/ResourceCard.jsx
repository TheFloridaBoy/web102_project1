const ResourceCard = (props) => {
    return (
      <div className="card">
        <div className="card-top">
          <span className={`tag ${props.type.toLowerCase()}`}>{props.type}</span>
          <h2 className="card-title">{props.title}</h2>
        </div>
  
        <p className="card-description">{props.description}</p>
  
        <div className="card-footer">
          <a className="card-link" href={props.link} target="_blank" rel="noreferrer">
            Visit
          </a>
        </div>
      </div>
    )
  }
  
  export default ResourceCard