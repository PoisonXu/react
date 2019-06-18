import React from 'react';
import { NavLink } from 'react-router-dom';
import '@/css/common/footer.scss'
export default () => (
  <footer>
    <ul>
      <li>
        <NavLink to = '/home'>首页</NavLink>
      </li>
      <li>
        <NavLink to = '/kind'>分类</NavLink>
      </li>
      <li>
        <NavLink to = '/cart'>购物车</NavLink>
      </li>
      <li>
        <NavLink to = '/user'>个人中心</NavLink>
      </li>
    </ul>
  </footer>
)