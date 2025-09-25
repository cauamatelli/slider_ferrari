import { useState } from 'react'
import './App.css'
import ferrari from './assets/f40.jpg'
import ferrari2 from './assets/ferrariss.jpg'
import ferrari3 from './assets/italia.jpg'
import LogoPuma from './assets/logof.png'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import Slider1 from './assets/Ferrari1.jpg'
import Slider2 from './assets/Ferrari2.jpg'
import Slider3 from './assets/Ferrari3.jpg'
import Slider4 from './assets/Ferrari4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          {/* Aqui fica o SLIDER */}  
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="" />
            </SwiperSlide>
           
            ...
          </Swiper>
        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={ferrari} alt="" className="img-card"/>
              <h2>Ferrari F40</h2>
              <p className="desc">A Ferrari F40 possui motor V8 biturbo de 2.9 litros com 478 cavalos de potência.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (479)</p>
              <p className="preco">R$ 5.000.000</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={ferrari2} alt="" className="img-card"/>
              <h2>Ferrari 488</h2>
              <p className="desc">A Ferrari 488 possui motor V8 biturbo de 3.9 litros com 670 cavalos de potência.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (3079)</p>
              <p className="preco">R$ 3.500.000</p>
              <p className="off">- 7%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={ferrari3} alt="" className="img-card"/>
              <h2>Ferrari 458 Italia</h2>
              <p className="desc">A Ferrari 458 possui motor V8 aspirado de 4.5 litros com 570 cavalos de potência.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (2679)</p>
              <p className="preco">R$ 2.700.700</p>
              <p className="off">- 35%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/sa7MkxTzC9A?autoplay=1&mute=1&controls=0&loop=1&playlist=sa7MkxTzC9A&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>

        <footer>

          <img src={LogoPuma} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="https://www.instagram.com/pumabrasil/" target="_blank">
                <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://discord.com/invite/puma" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={LogoWhats} alt="" className="whatsapp" />
              </a>
            </div>
          </div>

          <p className="txt-footer">
            FERRARI SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
