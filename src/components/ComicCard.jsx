const ComicCard = ({ id, thumb, title, series }) => {
  return (
    <div className="card" key={id}>
      <img src={thumb} alt={title} />
      <h3>{series}</h3>
    </div>
  )
}

export default ComicCard
