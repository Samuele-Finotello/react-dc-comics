const Navbar = () => {
  const links = [
    {
      id: 1,
      label: 'CHARACTERS',
      href: '#',
      active: false
    },
    {
      id: 2,
      label: 'COMICS',
      href: '#',
      active: true
    },
    {
      id: 3,
      label: 'MOVIES',
      href: '#',
      active: false
    },
    {
      id: 4,
      label: 'TV',
      href: '#',
      active: false
    },
    {
      id: 5,
      label: 'GAMES',
      href: '#',
      active: false
    },
    {
      id: 6,
      label: 'COLLECTIBLES',
      href: '#',
      active: false
    },
    {
      id: 7,
      label: 'VIDEOS',
      href: '#',
      active: false
    },
    {
      id: 8,
      label: 'FANS',
      href: '#',
      active: false
    },
    {
      id: 9,
      label: 'NEWS',
      href: '#',
      active: false
    },
    {
      id: 10,
      label: 'SHOP',
      href: '#',
      active: false
    },
  ]

  return (
    <ul id="links">
      {links.map(link => {
        const { id, label, href, active } = link;
        return (
          <li key={id}>
            <a href={href}>{label}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar
