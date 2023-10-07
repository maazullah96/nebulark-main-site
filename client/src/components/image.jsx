export const Image = ({ title, smallImage, props }) => {
  console.log(props)
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <div className='hover-text'>
          <h4>{title}</h4>
          {props ? (
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props ? props.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props ? props.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props ? props.wordpress : '/'}>
                      <i className='fa fa-wordpress'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props ? props.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* </div> */}
        <img src={smallImage} className='img-responsive' alt={title} />{' '}
        {/* </a>{' '} */}
      </div>
    </div>
  )
}
