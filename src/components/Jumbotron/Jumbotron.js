import React, { Component } from 'react'
import {JumboWrapper} from './styles'
const title = 'Fast and free delivery'

export default class styles extends Component {
  render() {
    return (
      <JumboWrapper>
        <div className='jumbotron jumbotron-fluid'>
          <div className='overlay'></div>
          <div className='container d-flex justify-content-center py-3'>
            <h6>
              {title}
              <i className='bi bi-arrow-right-circle-fill mx-2 jumbo-icon'></i>
            </h6>
          </div>
        </div>
      </JumboWrapper>
    )
  }
}
