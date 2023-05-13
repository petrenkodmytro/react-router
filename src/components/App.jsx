import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
import NotFound from 'pages/NotFound';

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Products = lazy(() => import('../pages/Products'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));
const FormLogin = lazy(() => import("./FormLogin"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="formlogin" element={<FormLogin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
