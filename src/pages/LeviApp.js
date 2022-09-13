import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../LeviApp.css"
import { useState } from "react";

const LeviApp = () => {
  const [description] = useState("NeoRhythm helps your brain reach a meditative brainwave state for a more productive session.")
  const [description2] = useState(" NeoRhythm assists your body’s natural recovery process to help you achieve greater balance and well-being.")
  return (
  
    <><>
          <Navbar />
          <section className='section'>
              <h2 className="Super">NeoRhythm</h2>
              <p>NeoRhythm is a pulsed electromagnetic field therapy device that emits corresponding dominant and accompanying frequencies to which the brain synchronizes, creating a perfect mental environment for the desired state of mind. </p>
              <Outlet />
          </section>
      </><div className="clearfix">
              <img src="https://omnipemf.com/wp-content/uploads/2021/08/Ikone-12-%E2%80%93-kopija.svg" className="col-md-6 float-md-end mb-3 ms-md-3" alt=""/>
                  <br>
                  </br>
                  <img className="One" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-03.svg" alt="Meditation"/>
                  <h5 className="Stylee">ENHANCED MEDITATION</h5> 
                  <p>
                    {description}
                  </p>
                  <img className="Two" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-04.svg" alt="Relaxation"/>
                <h5 className="Stylee">REFRESHING RELAXATION</h5>
                  <p>
                  NeoRhythm helps your brain produce calming alpha brainwaves. This relaxes and refreshes your body while putting your mind in a calm but alert state.                  </p>
                 <img className="Three" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-02.svg" alt="Sleep"/>
                <h5 className= "Stylee">DEEPER SLEEP</h5>
                  <p>
                  NeoRhythm can slow down your brainwaves, by emitting theta and delta frequencies, to encourage faster and more sound sleep.                  </p>
                 <img className= "Four" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-01.svg" alt="Well-Being"/>
                 <h5 className= "Stylee"> IMPROVED PHYSICAL WELL-BEING</h5> 
                 <p>
                  {description2}
                 </p>
                 <img className= "Five" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-06.svg" alt="Energy"/>
                 <h5 className ="Stylee">INCREASED ENERGY & VITALITY</h5>
                 <p>
                 NeoRhytm introduces magnetic energy into your body to boost and revitalize energy levels.
                 </p>
                 <img className="Six" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-05.svg" alt="Heightened Focus"/>
                 <h5 className ="Stylee">HEIGHTENED FOCUS</h5>
                 <p>
                 The frequencies emitted by NeoRhythm encourage your brain to produce delta brainwaves for stronger focus, attention, and mental skills.
                 </p>
                 <button type="button" className="btn btn-primary">Buy Now For $299.99</button>
                 <img className= "Seven" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FhWp6gzHUdmk935kG9N%2Fgiphy.gif&f=1&nofb=1" alt="Science!"/>
              </div></>
 )
};


export default LeviApp;
