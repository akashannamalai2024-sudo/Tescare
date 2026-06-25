import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './PestControlTips.css';

// Import real local service images
import bedbugImg from './assets/services/bedbug_control_1779952136140.png';
import rodentImg from './assets/services/rodent_control_1779952155477.png';
import mosquitoImg from './assets/services/mosquito_control_1779952172778.png';
import cockroachImg from './assets/services/cockroach_control_1779952189408.png';
import termiteImg from './assets/services/termite_control_1779952210853.png';
import birdImg from './assets/services/bird_netting_1779952229064.png';
import woodborerImg from './assets/services/wood_borer_control_1779952247139.png';

const tipsData = [
  {
    id: 1,
    category: 'Bedbug Control',
    title: 'Complete Guide to Bedbug Eradication',
    desc: 'Identify early warning signs of bedbugs and learn how professional heat and chemical treatments eliminate them.',
    image: bedbugImg,
    readTime: '5 MIN READ'
  },
  {
    id: 2,
    category: 'Rodent Control',
    title: 'Effective Baiting & Rodent Proofing',
    desc: 'Keep rats and mice away with advanced proofing techniques, entry blocking, and targeted baiting solutions.',
    image: rodentImg,
    readTime: '6 MIN READ'
  },
  {
    id: 3,
    category: 'Mosquito Control',
    title: 'Preventing Mosquito Breeding Grounds',
    desc: 'Stop stagnant water accumulation and learn how misting treatments disrupt mosquito life cycles.',
    image: mosquitoImg,
    readTime: '5 MIN READ'
  },
  {
    id: 4,
    category: 'Cockroach Control',
    title: 'Eradicating Resistant Cockroach Colonies',
    desc: 'Discover why gel baiting and target sprays are the most effective methods to clear cockroach nests.',
    image: cockroachImg,
    readTime: '4 MIN READ'
  },
  {
    id: 5,
    category: 'Termite Control',
    title: 'Protecting Wood and Building Foundations',
    desc: 'Prevent costly structural damage with pre-construction soil treatment and post-construction drilling.',
    image: termiteImg,
    readTime: '7 MIN READ'
  },
  {
    id: 6,
    category: 'Bird Netting',
    title: 'Balcony Bird Netting Installation Guide',
    desc: 'Secure balconies and windows with high-density polyethelene bird nets to keep pigeons away.',
    image: birdImg,
    readTime: '5 MIN READ'
  },
  {
    id: 7,
    category: 'Wood Borer',
    title: 'Stopping Wood Borer Damage Early',
    desc: 'Identify wood powder residue and protect premium wooden structures with targeted syringe injection treatments.',
    image: woodborerImg,
    readTime: '5 MIN READ'
  }
];

const PestControlTips = () => {
  return (
    <section className="tips-section">
      <div className="tips-container">
        <div className="tips-header">
          <h2 className="tips-title">Pest Control Tips & Guides</h2>
          <p className="tips-subtitle">
            Learn helpful tips and expert advice to protect your home from pests and birds.
            Stay informed with our latest pest control guides and prevention tips.
          </p>
        </div>

        <div className="tips-slider-wrapper">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="tips-swiper"
          >
            {tipsData.map((tip) => (
              <SwiperSlide key={tip.id} className="tip-slide">
                <div className="tip-card">
                  <img src={tip.image} alt={tip.title} className="tip-image-bg" />
                  <div className="tip-overlay"></div>
                  <div className="tip-content">
                    <h3 className="tip-card-title"><span>{tip.category}</span></h3>
                    <p className="tip-card-subtitle">{tip.readTime}</p>
                    <h4 className="tip-guide-title">{tip.title}</h4>
                    <p className="tip-card-desc">{tip.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PestControlTips;
