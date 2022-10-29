import { useRouter } from 'next/router'
import React from 'react'
import MainContainer from '../../components/MainContainer'

import styles from '../../styles/User.module.scss'

export default function User({ user }) {
  const router = useRouter()
  
  // console.log('user:', user);
  // console.log('router:', router);
  // console.log('styles:', styles);
  
  return (
    <MainContainer title="личный кабинет" keywords="user panel">
      <div className={styles.user}>
        <h1>user {user.name}</h1>
        <div>id - {router.query.id}</div>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
  return {
    props: {user}, // will be passed to the page component as props
  }
}


// export async function getStaticProps({ params, preview, previewData, locale, locales, defaultLocale }) {
//   // console.log('ctx :', { params, preview, previewData, locale, locales, defaultLocale });
//   const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//   const user = await response.json()
//   return {
//     props: { user }, // will be passed to the page component as props
//   }
// }
