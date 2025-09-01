const ComicCard = ({ comics }) => {

  return (
    <div className="card" key={comics.id}>
      <img src={comics.thumb} alt={comics.title} />
      <h3>{comics.series}</h3>
    </div>
  )
}

export default ComicCard
