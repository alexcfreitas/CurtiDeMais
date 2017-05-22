import React from 'react'
import Grid from '../template/grid'

export default props => (
  <div role='form' className='curtiForm'>
    <Grid cols='12 10 '>
      <input id='username' className='form-control'
        placeholder='O que você quer procurar no Dribbble?'
        onChange={props.handleChange}
        value={props.username}></input>
    </Grid>
    <Grid cols='12 2'>
      <button className='btn btn-primary' onClick={props.handleSearch}>
        <i className='icon-magnifier'></i> Pesquisar
      </button>

    </Grid>
  </div>
)
