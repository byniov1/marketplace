import { Link } from 'react-router-dom'
import style from './Header.module.scss'

export function Header() {
  return (
    <div className={style.header}>
      <Link to = '/' >
        <img className = {style.img} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seoclerk.com%2Fpics%2F000%2F748%2F061%2Fbd1ddcf20243b5366e14524b6b79c773.png&f=1&nofb=1&ipt=807d6f038aa136f5f138054a9a16b49a781430db8243494d1ca770661dfe2764&ipo=images" alt="logo" />
      </Link>
      <p>Header</p>
    </div>
  )
}
