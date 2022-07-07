import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Menus from './Common/Menu'
import Header from './Components/UI/organisms/Header'
import Layout from './Components//UI/organisms/Layout'
import SideMenu from './Components//UI/organisms/SideMenu'
function App() {
  const menu = Menus();
  return (
    <>
        <Layout>
          <SideMenu/>
          <Header/>
          <Routes>
            {
              menu.map(i => {
                return i.depth.map(j => 
                    <Route element={j.el} path={j.url}/>
                  )
              })
            }
          </Routes>
        </Layout>
    </>
  )
}

export default App