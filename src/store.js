import { createStore } from 'redux';

const reducer = (state = {
  bannerList: [],
  proList: []
}, {type, data}) => {
  switch (type) {
    case 'changeBannerList':
      state = {
        bannerList: data,
        proList: state.proList
      }
      return state;
    case 'changeProList':
        state = {
          bannerList: state.bannerList,
          proList: data
        }
      return state;
    default:
      return state;
  }
};

export default createStore(reducer);
