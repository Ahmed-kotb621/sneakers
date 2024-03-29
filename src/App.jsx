import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import ItemDetails from './pages/Item';
import Men from './pages/Men';
import Women from './pages/Women';
import About from './pages/About';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Toaster } from 'react-hot-toast';
import LogIn from './pages/LogIn';
import ProtectedRoutes from './pages/ProtectedRoutes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }
            >
              {/* <Route index element={<Navigate replace to="/" />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="login" element={<LogIn />} />
              <Route path="item/:id" element={<ItemDetails />} />
              <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={8}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: { duration: 1500 },
            error: { duration: 3000 },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              backgroundColor: '#fff',
              padding: '16px 20px',
              color: '#000',
            },
          }}
        />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
