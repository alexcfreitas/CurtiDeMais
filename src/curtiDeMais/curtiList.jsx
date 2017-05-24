import React from 'react'
import Grid from '../template/grid'

export default props => {

  const renderShots = () => {
    const list = props.list || []
    console.log(props)
    return list.map(shot => (
      <Grid key={shot.id} cols={'12 6 4 '}>
        <div  className="dribbble">
          <div   className="dribbble-shot">
            <div className="shot-img">
              <img className="img-responsive" src={shot.images.hidpi ? shot.images.hidpi : shot.images.normal }  onClick={() => props.handleViewShot(shot)} alt="Sem Imagem"/>
            </div>
            <ul  className="tools group">
              <li className="fav">
                <i className='fa fa-heart' ></i><span>{shot.likes_count}</span>
              </li>
              <li className="cmnt">
                <i className='fa fa-comments'></i><span> {shot.comments_count}</span>
              </li>
              <li className="views">
                <i className='fa fa-eye'></i><span>{shot.views_count}</span>
              </li>
            </ul>
          </div>
        </div>
      </Grid>
    ))
  }

  return (

      <Grid cols='12'>
        <div className="clearfix"></div>
        <div className='row'>
        {renderShots()}
        </div>
      </Grid>
  )
}
