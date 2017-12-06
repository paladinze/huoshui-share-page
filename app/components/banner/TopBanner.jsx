import React, { Component } from 'react'
import { Button, Image } from 'semantic-ui-react'

export default class TopBanner extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div
        style={{
          padding: '1em',
          background: '#00b6ad5e',
          marginBottom: '1em',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontSize: '1.75em',
            fontWeight: 'bold',
            lineHeight: '1.25em',
            color: '#00b6ade6',
            float: 'left',
          }}
        >
          活水
        </div>
        <Button color="teal" floated="right">
          App 极速下载
        </Button>
        <Image src="/images/sample/sample2.png" style={{ display: 'none' }} />
      </div>
    )
  }
}
