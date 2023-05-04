import { Link, useParams } from "react-router-dom"
import styles from './Breadcrum.module.scss'


//Wstępny breadcrum, nie powinno bo się tak robić xD, każdy link powinien być klikalny

export function Breadcrum() {

  let { categoryParam, subcategoryParam } = useParams()

  function a(categoryParam: any, subcategoryParam: any) {
    if (categoryParam !== undefined && subcategoryParam === undefined) {
      return (
        <ul className= {`${styles.breadcrum}`}>
          <li>
            <Link to={`http://localhost:9000`}>{`Strona Główna`}</Link>
          </li>
          <span>{'>'}</span>
          <li>
            <Link to={`http://localhost:9000/${categoryParam}`}>{`${categoryParam}`}</Link>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className= {`${styles.breadcrum}`}>
          <li>
            <Link to={`http://localhost:9000`}>{`Strona Główna`}</Link>
          </li>
          <span>{'>'}</span>
          <li>
            <Link to={`http://localhost:9000/${categoryParam}`}>{`${categoryParam}`}</Link>
          </li>
          <span>{'>'}</span>
          <li>
            <Link to={`http://localhost:9000/${categoryParam}/${subcategoryParam}`}>{`${subcategoryParam}`}</Link>
          </li>
        </ul>
      )
    }
  }

  return (
    <div>
      {
        a(categoryParam, subcategoryParam)
      }
    </div>
  )
}
