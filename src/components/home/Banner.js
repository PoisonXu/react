import React from 'react';
import { Carousel } from 'antd-mobile';

// class App extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       data: [1, 2]
//     }
//   }
//   componentDidMount() {
//     fetch ('http://www.daxunxun.com/banner')
//     .then(res => res.json())
//     .then(data => {
//       this.setState({ data })
//     })
//   }
//   render() {
//     return (
//         <Carousel
//           autoplay
//           infinite
//         >
//           {this.state.data.map((val, index) => (
//               <img
//                 key = {index}
//                 src={`http://www.daxunxun.com${val}`}
//                 alt=""
//                 // style={{ width: '100%', verticalAlign: 'top' }}
//                 onLoad={() => {
//                   window.dispatchEvent(new Event('resize'));
//                 }}
//               />
//           ))}
//         </Carousel>
//     );
//   }
// }

// export default App;


export default ({ bannerList }) => (
  <Carousel
    autoplay
    infinite
  >
    {bannerList.map((val, index) => (
        <img
          key = {index}
          src={`http://www.daxunxun.com${val}`}
          alt=""
          // style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
        />
    ))}
  </Carousel>  
)