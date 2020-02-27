import React from 'react'
import {Button, Typography} from '@material-ui/core'
import genPass from '../../genny'
import axios from 'axios'

class Generate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {newPass: '', availWords: []}
    this.handleGenerate = this.handleGenerate.bind(this)
  }
  componentDidMount() {
    // api call
    // api url pull lotr words
  }

  handleGenerate() {
    this.setState({
      newPass: genPass()
    })
  }

  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.handleGenerate}>
          Generate!
        </Button>
        <div>
          <Typography variant="h6">Your new password is:</Typography>
          <Typography variant="h4">
            {this.state.newPass
              ? this.state.newPass
              : 'Generate a password now!'}
          </Typography>
        </div>
      </div>
    )
  }
}

export default Generate
