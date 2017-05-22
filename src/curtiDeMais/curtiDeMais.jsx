import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import CurtiForm from './curtiForm'
import CurtiList from './curtiList'
import { BasicURL, AuthToken } from '../main/configAxios'



export default class CurtiDeMais extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      like: false,
      alterarTamanho: false,
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLike = this.handleLike.bind(this)
    this.handleSize = this.handleSize.bind(this)
    this.refresh()
  }

  refresh(username = ''){
    const search = username ? `/users/${username}/shots` : ''
    if (search === '') {
      axios.get(`${BasicURL}/shots?per_page=60`, AuthToken)
      .then(resp => this.setState({...this.state, username, list: resp.data}))
    }else {
      axios.get(`${BasicURL}${search}?per_page=60`, AuthToken)
      .then(resp => this.setState({...this.state, username: '', list: resp.data}))
    }

  }

  handleChange(e){
    this.setState({...this.state, username: e.target.value})
  }

  handleSearch() {
    this.refresh(this.state.username)

  }

  handleSize(){
    this.setState({...this.state, alterarTamanho: true})
  }

  handleLike(shot){
    axios.post(`${BasicURL}/shots/${shot.id}/like`, AuthToken)
      .then(resp => this.refresh())

  }

  render() {
    return (
      <div className="">
        <div className="box-body row">
          <CurtiForm username={this.state.username}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}/>
        </div>
        <CurtiList
          list={this.state.list}
          handleLike={this.handleLike}
          handleSize={this.handleSize}/>
      </div>
    )
  }
}
