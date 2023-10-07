import { useSelector } from 'react-redux/es/hooks/useSelector'
import Particles from 'react-tsparticles'
import { loadLinksPreset } from 'tsparticles-preset-links'
import { getAboutUsData } from './aboutUsSlice'

const Header = (props) => {
  const { title, subTitle } = useSelector(getAboutUsData)
  console.log('title ==>', title)
  console.log('subTitle ==>', subTitle)
  const particlesInit = (main) => {
    console.log(main)
    loadLinksPreset(main)
    // preset: "links"

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: 'links',
          background: {
            // image:"public\img\demo-3-bg.jpg"
            color: {
              value: '#2D4473'
            }
          },
          fullScreen: {
            enable: false
          }
        }}
      />
      <h1 className='main-title'>
        {title || 'loading...'}
        <span className='thin'> {subTitle || 'loading...'} </span>
      </h1>
    </>
  )
}

export default Header
