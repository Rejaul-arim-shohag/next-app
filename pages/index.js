import Head from 'next/head'
import Blog from '../components/Blog'
import ClientTestimonial from '../components/ClientTestimonial'
import CompanyAuthors from '../components/CompanyAuthors'
import Counting from '../components/Counting'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Services from '../components/Services'
import TopBar from '../components/TopBar'


export default function Home() {
  return (
    <div >
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="../../../stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* <link rel="stylesheet" href="../styles/animate.css+owl.carousel.min.css+owl.theme.default.min.css+magnific-popup.css+flaticon.css+style.css.pagespeed.cc.Vg93CQ6JhI.css" /> */}
      </Head>

      <TopBar />
      <NavBar />
      <HeroSection />
      <Services />
      <Counting />
      <CompanyAuthors />
      <Products />
      <ClientTestimonial />
      <Blog />
      <Footer />

    </div>
  )
}
