/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Experience from './pages/Experience';
import RecentWork from './pages/RecentWork';
import Catalogue from './pages/Catalogue';
import TileCalculator from './pages/TileCalculator';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/recent-work" element={<RecentWork />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/calculator" element={<TileCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
}
