import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import ScrollToTop from './components/ScrollToTop';
import FloatingSocial from './components/FloatingSocial/FloatingSocial';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Rooms = lazy(() => import('./pages/Rooms'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Nearby = lazy(() => import('./pages/Nearby'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));
const DailyBooking = lazy(() => import('./pages/DailyBooking'));
const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingSocial />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/daily-booking" element={<DailyBooking />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
