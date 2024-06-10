import { Suspense, useContext, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { Counter } from "./components/Counter"
import './styles/index.scss'
import AboutPage from "./pages/AboutPage/AboutPage"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import MainPage from "./pages/MainPage/MainPage"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

const App = () =>  {
 const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOOGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>        
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />}/>
           <Route path={'/'} element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App