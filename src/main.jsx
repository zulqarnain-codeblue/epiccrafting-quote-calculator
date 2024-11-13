import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import QuoteCalculatorPage from './pages/QuoteCalculatorPage.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './app/store/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "quotations",
        element: <QuoteCalculatorPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
)
