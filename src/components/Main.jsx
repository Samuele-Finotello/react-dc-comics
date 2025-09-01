import ComicList from './ComicList'

const Main = () => {
  return (
    <main>
      <div id='jumbotron'></div>
      <div className='container'>
        <button id='button-up'>CURRENT SERIES</button>
        <ComicList />
        <div className='justify-center'>
          <button>LOAD MORE</button>
        </div>
      </div>
    </main >
  )
}

export default Main
