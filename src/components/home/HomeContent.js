import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner'
export default ({ contentList }) => (
  <div className = 'content'>
    <Banner bannerList = { contentList.bannerList } />
    <ul>
      {
        contentList.proList.map((item, index) => (
          <li key = { index }>
            <Link to = {'/detail/' + item.id }>
              <img src = {item.images.small} alt = ''/>
            { item.title }
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
);