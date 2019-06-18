import React from 'react';
class Com extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      info: {}
    }
  }
  componentDidMount () {
    fetch(`http://www.daxunxun.com/detail?id=${this.props.match.params.id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        info: data[0]
      })
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <img src = {this.state.info.images ? this.state.info.images.small : {}} alt = ''/>
        <button onClick = { this.goBack }>返回</button>
      </div>
    )
  }
}


export default Com;