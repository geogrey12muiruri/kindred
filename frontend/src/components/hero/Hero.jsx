import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroImage1 from '../../assets/images/image1.jpg';
import HeroImage2 from '../../assets/images/image5.jpg';
import HeroImage3 from '../../assets/images/image6.jpg';
import HeroImage4 from '../../assets/images/image7.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
  
};

const Hero = () => {
  return (
    <div>
      <section >
        <div className="flex flex-col-reverse lg:grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-xl md:text-2xl lg:text-3xl xl:text-xl dark:text-slate-950">Kindred Care, <span className='text-red-500'>Professional Care</span>  for You and Your Loved ones</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 sm:text-sm md:text-md lg:text-lg xl:text-xl dark:text-slate-950">Feeling overwhelmed by juggling work, family, and caring for a loved one? You're not alone. Our platform connects you with compassionate caregivers who bring expertise and warmth to your home. Imagine seeing your loved one thrive with personalized care, while you enjoy precious moments of relief and recharge. Let us help you create a brighter future for everyone You Love.</p>
            <a href="#" className='flex py-3 px-5 item-center gap-1 text-lg text-red-500 font-mono fonto-bold shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3'>
                Find The Perfect Caregiver
            </a> 
          </div>
          <div className="sm:block lg:mt-0 lg:col-span-5">
            <Slider {...settings}>
              <div>
                <img src={HeroImage1} alt="mockup" className="w-full h-auto"/>
              </div>
              <div>
                <img src={HeroImage2} alt="mockup" className="w-full h-auto"/>
              </div>
              <div>
                <img src={HeroImage3} alt="mockup" className="w-full h-auto"/>
              </div>
              <div>
                <img src={HeroImage4} alt="mockup" className="w-full h-auto"/>
              </div>
            </Slider>
          </div>                
        </div>
      </section>
    </div>
  )
}

export default Hero