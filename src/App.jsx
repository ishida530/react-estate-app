import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/homepage/HomePage'
import ListPage from './routes/listPage/ListPage'
import Layout from './routes/layout/layout'
import SinglePage from './routes/singlePage/SinglePage'
import ProfilePage from './routes/profilePage/ProfilePage'

function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        },
        {
          path: '/profile',
          element: <ProfilePage />
        }
      ]
    },

  ])
  return (



    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App