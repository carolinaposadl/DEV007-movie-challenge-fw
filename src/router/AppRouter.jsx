import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../movies/pages/Home'
// donde van a estar las rutas individuales, las Routes no son como tal las rutas
// las rutas se definen por el componente Route

export const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path='/login' element={<h1>Hello</h1>}> </Route> */}
            <Route path='/home' element={<Home />} />

            <Route path='/*' element={<Navigate to='/home' />} />

        </Routes>
    )
}

// /* es para renderizar una ruta que no exista que lo redirija a donde yo quiera

// Route recibe 2 atributos path que va a ser el nombre de la ruta
// y element es lo que se va a mostrar