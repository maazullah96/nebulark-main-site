import { useSelector } from 'react-redux'
import { getAboutUsData } from './aboutUsSlice'

const AboutUs = () => {
  const { description, whyChooseUs } = useSelector(getAboutUsData)

  // Divide the whyChooseUs array into two separate arrays
  const halfLength = whyChooseUs ? Math.ceil(whyChooseUs.length / 2) : 0
  const firstHalf = whyChooseUs ? whyChooseUs.slice(0, halfLength) : []
  const secondHalf = whyChooseUs ? whyChooseUs.slice(halfLength) : []

  // Render the lists for the two arrays
  const firstHalfList = firstHalf.length
    ? firstHalf.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
    : 'loading'

  const secondHalfList = secondHalf.length
    ? secondHalf.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
    : 'loading'

  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-7'>
            <div className='about-text'>
              <h2>About Us</h2>
              <p>{description || 'loading...'}</p>
              <h3>Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>{firstHalfList}</ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>{secondHalfList}</ul>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xs-12 col-md-5 col-sm-6'>
            <img src='img/about.jpg' className='img-responsive' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
