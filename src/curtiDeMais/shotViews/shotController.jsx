import axios from 'axios'
import React, {Component} from 'react'

import Grid from '../../template/grid'
import {BasicURL, AuthToken} from '../../main/configAxios'

export default class ShotController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shot: {},
      images: {}
    }

    this.refreshShot()
     this.handleLike = this.handleLike.bind(this);
  }

  refreshShot(){
    const shot = document.URL
    const shotArray = shot.split('/')
    const shotID = shotArray[shotArray.length-1]

    axios.get(`${BasicURL}/shots/${shotID}`, AuthToken)
      .then(resp => this.setState({...this.state, shot: resp.data, images: resp.data.images}))
  }

  handleLike(){
    this.setState(prevState => ({
      isLike: !prevState.isLike
    }));
    const shot = document.URL
    const shotArray = shot.split('/')
    const shotID = shotArray[shotArray.length-1]
    axios.get(`${BasicURL}/shots/${shotID}/like`, AuthToken)
      .then(resp => this.setState({...this.state}))
  }


  render() {

    return (
      <Grid key={this.state.shot.id} cols='12'>
        <div className="alignBody col-md-offset-2">
        <Grid cols='12 8'>
          <div className="titulo">
            <h3>{this.state.shot.title}</h3>
          </div>
          <div  className="dribbble align-center">
          <div   className="dribbble-shot">
            <div className="shot-img">
              <img className="img-responsive" src={this.state.images.hidpi} alt="Sem Imagem"/>
            </div>

          </div>
        </div>
      </Grid>
      <div className="clearfix"></div>
      <Grid cols='12 8'>
        <ul  className="tools group">
          <li className="fav" onClick={this.handleLike}>
            {this.state.isLike ? <span><i className='fa fa-heart LikeTrue' ></i><span className='LikeTrue'> Like</span></span>: <span><i className='fa fa-heart ' ></i><span>{this.state.shot.likes_count}</span></span>}

          </li>
          <li className="cmnt">
            <i className='fa fa-comments'></i><span> {this.state.shot.comments_count}</span>
          </li>
          <li className="views">
            <i className='fa fa-eye'></i><span>{this.state.shot.views_count}</span>
          </li>
          <li className="">
            <a className='btn btn-default btn-primary btn-shot-view' href="/#/list-shots">
              <i className='icon-arrow-left'></i> Voltar</a>
          </li>
        </ul>
      </Grid>
    </div>
      </Grid>
    )
  }
}
