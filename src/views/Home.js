import React from 'react';
import HomeContent from '@/components/home/HomeContent';
import store from '@/store';

class Com extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     contentList: [],
  //     bannerList: []
  //   }
  // }

  componentDidMount () {
    fetch ('http://www.daxunxun.com/banner')
    .then(res => res.json())
    .then(data => {
      store.dispatch({
        type: 'changeBannerList',
        data
      })
    })

    fetch ('http://www.daxunxun.com/douban')
    .then(res => res.json())
    .then(data => {
      store.dispatch({
        type: 'changeProList',
        data
      })
    })
  }

  render () {
    console.log(store.getState())
    return (
      <main>
        <header className = "header">
          这是home头部
        </header>
        <HomeContent contentData = { store.getState() }/>
      </main>
    )
  }
}

export default Com;