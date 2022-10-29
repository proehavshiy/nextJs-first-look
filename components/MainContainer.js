import Head from "next/head"
import A from "./A"

function MainContainer({keywords, title, children}) {
  return (
    <>
      {/* для метатегов компонент */}
      <Head>
        <meta keywords={'next js, ' + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div className="navbar">
        <A href="/" text={'home'} />
        <A href="/users" text={ 'users' } />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
            {`
               .navbar {
                  border: 1px solid red;
                  padding: 15px;
                  background-color: orange;
               }
               .link {
                  text-decoration: none;
                  margin-right: 15px;
               }
            `}
        </style>
    </>
  )
}

export default MainContainer