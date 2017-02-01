import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick1() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    })
  }

  handleClick2() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: '720p',
        }),
      })
    })
  }

  render() {
    return (
      <div>
        <button className = "bitrate" onClick={this.handleClick1.bind(this)}/>
        <button className = "resolution" onClick={this.handleClick2.bind(this)}/>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
