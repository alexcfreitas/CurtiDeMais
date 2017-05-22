import axios from 'axios'
import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import CurtiList from '../curtiDeMais/curtiList'
import {BasicURL, AuthToken} from '../main/configAxios'

export default class ShotView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like: false,
      shot: {}
    }
    this.updateShot(document.URL)
    this.handleLike()
  }

  updateShot(shot){
    const shotArray = shot.split('/')
    const result = shotArray[shotArray.length-1]
    axios.get(`${BasicURL}/shots/${result}`, AuthToken).then(resp => this.setState({...this.state, shot: resp.data }))
  }

  handleLike(resp) {
    // axios.post(`${BasicURL}/shots/${document.URL}/like`, AuthToken).then(resp => this.refresh())
          console.log(this.state.shot)
  }

  render() {
    return (
      <div className="">
        <h1>Ola</h1>
      </div>
    )
  }
}
