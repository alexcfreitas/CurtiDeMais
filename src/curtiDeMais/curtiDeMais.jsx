import React, {Component} from 'react'
import axios from 'axios'


import CurtiForm from './curtiForm'
import CurtiList from './curtiList'
import {BasicURL, AuthToken} from '../main/configAxios'
import Grid from '../template/grid'

export default class CurtiDeMais extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      tamanho: false,
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSize = this.handleSize.bind(this)
    this.handleViewShot = this.handleViewShot.bind(this)
    this.refresh()
  }

  refresh(username = '') {
    const search = username ? `/users/${username}/shots` : ''
    if (search === '') {
      axios.get(`${BasicURL}/shots?per_page=60`, AuthToken)
        .then(resp => this.setState({...this.state, username, list: resp.data }))

    } else {
      axios.get(`${BasicURL}${search}?per_page=60`, AuthToken)
        .then(resp => this.setState({ ...this.state, username: '', list: resp.data
        }))
    }

  }

  handleChange(e) {
    this.setState({ ...this.state,username: e.target.value })
  }

  handleSearch() {
    this.refresh(this.state.username)
  }

  handleSize() {
    this.setState(prevState => ({
      mudarTamanho: !prevState.mudarTamanho
    }));
  }

  handleViewShot(shot) {
     window.location = `#/shot/${shot.id}`
  }

  render() {
    return (
      <div className="">
        <div className="box-body row">
          <CurtiForm
            username={this.state.username}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}/>
        </div>

          <button id='alteraTamanho' className='btn btn-primary tamanho' onClick={this.handleSize}>
            <i className='icon-grid'></i> Alterar Tamanho
          </button>
        <div className={ this.state.mudarTamanho ? 'alterarTamanho' : ''}>
        <CurtiList
          list={this.state.list}
          handleViewShot={this.handleViewShot}/>
      </div>
      </div>
    )
  }
}
