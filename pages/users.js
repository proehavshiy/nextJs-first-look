import Link from "next/link"
import { useEffect, useState } from "react"
import MainContainer from "../components/MainContainer"

function Users({  users }) {
  // console.log('users:', users);
  // const [users, setUsers] = useState([
  //   { id: 1, name: 'petya' },
  //   { id: 2, name: 'vanya' },
  //   { id: 3, name: 'katya' },
  // ])

  // useEffect(() => {

  //   const fetchUsers = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  //     return await res.json()
  //   } 
    
  //   fetchUsers()
  //     .then(v => setUsers(v))
  
  // }, [])

  return (
    <MainContainer title="Пользователи" keywords="users">
      <h1>users page</h1>
      <ul>
        {users.map(el => (
            <li key={el.id}>
              <Link href={`/users/${el.id}`}>
                {el.name}
            </Link>
            </li>
        ))}
    </ul>
    </MainContainer>
    
  )
}

// Users.getInitialProps = async ({pathname, query, asPath, req, res, err}) => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//   const users = await response.json()

//   return { users }
// }

export async function getStaticProps({ params, preview, previewData, locale, locales, defaultLocale }) {
  // console.log('ctx :', { params, preview, previewData, locale, locales, defaultLocale });
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await response.json()
  return {
    props: { users }, // will be passed to the page component as props
  }
}

export default Users