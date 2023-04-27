
export const FakeAnimalItem = ({ description, url, title, image, id } :any) => {

    return (
      <div className="card">
          <img src={ image } alt={ description } />
          <h1>{title}</h1>
          <a href={url}>{url}</a>
          <p>{ description }</p>
      </div>
    )
}