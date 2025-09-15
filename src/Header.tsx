function Header() {



  return (
    <header className='banner' >
      <ul className='left_menu'>
        <li>
          <a href="/"><p className='title'>UOSLIFE FE</p></a>
        </li>
        <li>
          <a>메뉴1</a>
        </li>
        <li>
          <a>메뉴2</a>
        </li>
        <li>
          <a>메뉴3</a>
        </li>
      </ul>
      <ul className='right_menu'>
        <li>
          <a href="https://github.com/"><img src="github.png" width={50} height={50}/></a>
        </li>
        <li>
          <a href="https://www.instagram.com/"><img src="instagram.png" width={50} height={50}/></a>
        </li>
        <li>
          <a href="https://www.google.com/"><img src="google.png" width={50} height={50}/></a>
        </li>
      </ul>
    </header>
  )
}

export default Header
