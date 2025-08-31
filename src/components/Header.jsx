import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className='container space-between'>
      <div>
        <img src="/img/dc-logo.png" alt="Logo" />
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
