import './App.css';
import { Navbar, Footer } from './components/index'
import { Header, Features, Features2, CTA, Blog, Testimonial } from './container/index'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='container mx-auto max-w-none md:max-w-5xl px-6 px-lg-0'>
        <Features />
        <Features2 />
        <CTA />
        <Blog />
        <Testimonial />
      </div>
      <Footer />
    </>
  );
}

export default App;