import Particles from 'react-tsparticles'
import { loadLinksPreset } from 'tsparticles-preset-links'
export const Header = (props) => {
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
        {props.data ? props.data.title : 'loading...'}
        <span className='thin'>
          {' '}
          {props.data ? props.data.paragraph : 'loading...'}{' '}
        </span>
      </h1>

      {/* Nebulark  */}
      {/* <span className="thin"> Designing Solutions</span>  */}
      {/* < */}
    </>
  )
}
