import { HomeWrapper } from './styles'
import {ButtonWrapper} from '../Button'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

export default function Home() {
  
  return (
    <HomeWrapper>
      <div className='stay'>
        <div className='container-lg backdrop py-5'>
          <div className='overlay'></div>
          <div className='py-5 px-3'>
            <Slide top>
              <h1>Beats Studio Buds</h1>
              <p className='text-capitalize text-title'>
                True wireless noise cancelling earphones{' '}
              </p>
              <p className='fw-bold lead'>&#8358; 90,000</p>
              <div className='d-flex'>
                <Link to='/shop'>
                  <ButtonWrapper>BUY NOW</ButtonWrapper>
                </Link>
                <Link to='/'>
                  <ButtonWrapper click>LEARN MORE</ButtonWrapper>
                </Link>
              </div>
            </Slide>
          </div>
        </div>
        <Fade bottom>
          <div className='container-lg d-lg-flex  push-down px-3'>
            <div className='row'>
              <div className='col-12 col-lg-7 mx-auto col-md-6'>
                <div className='bg-image'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/v1629976777/Gadgets/bbd.hpthumb.kar.desktopwide.jpg.large.2x_jy7wd8.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    L’ART DE L’AUTOMOBILE’S CLASSIC RIDE-INSPIRED BEATSPILL+
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/v1629976860/Gadgets/bbd.hpthumb.studiobuds.desktop.jpg.large.2x_oehskf.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    MORE MUSIC, LESS NOISE WITH BEATS STUDIO BUDS
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className='container-lg d-lg-flex push-down px-3'>
            <div className='row'>
              <div className='col-12 col-lg-4 mx-auto col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/v1629976626/Gadgets/bbd.hpthumb.findmy.desktop.jpg.large.2x_yt5zbc.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    KEEP TRACK OF YOUR BEATS WITH FIND MY
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/v1629976450/Gadgets/bbd.hpthumb.psychworld.desktop.jpg.large.2x_badpit.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    Psychworld | Beats Studio3 Wireless PSYCHWORLD’S DIGI-CAMO
                    BEATS STUDIO3 WIRELESS
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/v1629976310/Gadgets/bbd.hpthumb.fazepowerbeatspro.desktoptall.jpg.large.2x_c8lo3p.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    FAZE CLAN’S RED TIGER SKINNED POWERBEATS PRO
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className='container-lg d-lg-flex  push-down px-3'>
            <div className='row'>
              <div className='col-12 col-lg-7 mx-auto col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/v1629973557/Gadgets/bbd.hpthumb.bhm.desktopwide.jpg.large.2x_jvrowb.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    BEATS CELEBRATES BLACK WOMEN WITH MONICA AHANONU
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
              <div className='col-12 col-lg-5 col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/c_scale,h_500/v1629973557/Gadgets/bbd.hpthumb.fragment.desktoptall.jpg.large.2x_qc82bk.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    FRAGMENT DESIGN’S BLACK-ON-BLACK POWERBEATS PRO
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className='container-lg d-lg-flex  push-down px-3'>
            <div className='row'>
              <div className='col-12 col-lg-5 mx-auto col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/c_scale,h_500,w_500/v1629973557/Gadgets/bbd.hpthumb.youloveme.desktop.jpg.large.2x_ncjxqj.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    WATCH BEATS’ NEW FILM CELEBRATING BLACK JOY AND RESILIENCE
                    <Link to='/'>
                      <span className='read'>Read</span>
                    </Link>
                  </h2>
                </div>
              </div>
              <div className='col-12 col-lg-7 col-md-6'>
                <div className='bg-image hover-zoom'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/v1629973480/Gadgets/bbd.hpthumb.beatsflex.desktopwide.jpg.large.2x_mnmqa3.jpg'
                    className='img-fluid'
                    alt='airpods'
                  />
                </div>
                <div className='push-up w-75'>
                  <h2 className=' text-uppercase text-dark'>
                    BEATS FLEX: MADE FOR THE WAY YOU LIVE
                    <Link to='/'>
                      <span className='read'>explore</span>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        {/* <div className='d-none d-lg-block bg-dark w-25 p-3 shift'>
          <div className=''>
            <div className='d-flex justify-content-end'>
              <i className='bi bi-x ml-auto'/>
            </div>
            <h4 className=''>The latest stories</h4>
            <h4>Direct to your inbox.</h4>
            <div class='form-outline'>
              <input type='email' id='typeEmail'
              class='form-control'placeholder='Enter your email'/>
              <label class='form-label' for='typeEmail'></label>
            </div>
          </div>
        </div> */}
      </div>
    </HomeWrapper>
  )
}
