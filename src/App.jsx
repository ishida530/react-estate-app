import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/homepage/HomePage'
import ListPage from './routes/listPage/ListPage'
import { RequireAuth, Layout } from './routes/layout/layout'
import SinglePage from './routes/singlePage/SinglePage'
import ProfilePage from './routes/profilePage/ProfilePage'
import Register from './routes/register/Register'
import LoginPage from './routes/loginPage/LoginPage'
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage'
import NewPostPage from './routes/newPostPage/NewPostPage'
import { singlePageLoader } from './lib/loaders'

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
          element: <SinglePage />,
          loader: singlePageLoader
        },

        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <LoginPage />
        }
      ]
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />
        },
        {
          path: '/add',
          element: <NewPostPage />
        },
      ]
    }
  ])
  return (



    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App