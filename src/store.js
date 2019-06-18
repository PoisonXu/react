import { createStore } from 'redux';

const reducer = (state = {
  bannerList: [],
  proList: []
}, {type, data}) => {
  console.log(state)
  // console.log(data)
  switch (type) {
    case 'changeBannerList':
      state.bannerList = data
      return state;
    case 'changeProList':
      state.proList = data
      return state;
    default:
      return state;
  }
};

export default createStore(reducer);
