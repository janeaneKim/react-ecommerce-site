import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const LeviApp2 = () => {
  return (
    <><>
          <Navbar />
          <section className='section'>
              <h2 class="Super">NeoWrap</h2>
              <p>Made out of a soft, skin friendly and breathable fabric. One size fits all. Easy to wrap around and affix – make sure the wrap is fastened loosely enough for you not to feel any discomfort. Keeps your NeoRhythm in place while you are on the go so you can move around with ease. Can also be used overnight.</p>
              <Outlet />
          </section>
      </><div class="clearfix">
              <img  src="https://omnipemf.com/wp-content/uploads/2021/06/improve-meditation-practice.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="" />
              <br>
              </br>
              <img class="One" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-07.svg" alt="Cognition" />
              <h5 class="Stylee">IMPROVED COGNITIVE FUNCTION</h5>
              <p>
              NeoRhythm helps with improving cognitive performance, attention and reducing the proportion of errors.
              </p>
              <img class="Two" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-08.svg" alt="Heart Rate" />
              <h5 class="Stylee">REFRESHING RELAXATION</h5>
              <p>
              PEMF effectively helps to enhance overall physical wellbeing, better movement and relieve strains.
              </p>
              <img class="Three" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-02.svg" alt="Sleep" />
              <h5 class="Stylee">DEEPER SLEEP</h5>
              <p>
                  NeoRhythm can slow down your brainwaves, by emitting theta and delta frequencies, to encourage faster and more sound sleep.</p>
              <img class="Four" src="https://omnipemf.com/wp-content/uploads/2021/06/Ikone-01.svg" alt="Well-Being" />
              <h5 class="Stylee">IMPROVED PHYSICAL WELL-BEING</h5>
              <p>
                  NeoRhythm assists your body’s natural recovery process to help you achieve greater balance and well-being.
              </p>
              <img class="Five" src="image.png" alt="Energy" />
              <h5 class="Stylee">INCREASED ENERGY & VITALITY</h5>
              <p>
                  NeoRhytm introduces magnetic energy into your body to boost and revitalize energy levels.
              </p>
              <img class="Six" src="https://omnipemf.com/wp-content/uploads/2021/06/MeditationPratcie_03.svg" alt="Heightened Focus" />
              <h5 class="Stylee">EMOTIONAL WELLBEING</h5>
              <p>
              NeoRhythm imitates the brain’s natural rhythms at rest and trains your brain to follow those rhythms. When you can calm your brain and body, you can calm your life and reach emotional balance and well-being.
              </p>
              <button type="button" class="btn btn-primary">Buy Now For $49.99</button>
              <img Class="Seven" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fl30sOGkvj7Oo2QO5Bb%2Fgiphy.gif&f=1&nofb=1" alt="Science!" />


          </div></>
  
  
  )
};

export default LeviApp2;
