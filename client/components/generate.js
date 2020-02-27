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
  async componentDidMount() {
    try {
      console.log('component did mount starts')
      const wordArr = await axios.get('/api/words/lotr')
      console.log('word arr in component did mount', wordArr)
      this.setState({availWords: wordArr.data})
    } catch (error) {
      console.log(error)
    }
  }

  handleGenerate() {
    this.setState({
      newPass: genPass(this.state.availWords)
    })
  }

  render() {
    console.log(
      this.state.availWords.length
        ? ('avail words: ', this.state.availWords)
        : 'loading..'
    )
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
