import * as React from "react";
import styled from "styled-components";

import porsche_logo from "../../assets/images/porsche_logo.png";
interface IMenuProps {}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {
  return (
    <MenuWrapper>
      <div className='logo'>
        <img src={porsche_logo}></img>
      </div>
      <div className='menu-content'>
        <ul>
          <li>Story</li>
          <li>Concept</li>
          <li>Idea</li>
        </ul>
      </div>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  padding: 30px;
  .logo {
    width: 60px;
    img {
      width: 100%;
    }
  }

  .menu-content {
    color: #fff;
    font-weight: 600;
    ul {
      display: flex;
      li {
        list-style: none;
        padding: 5px 30px;
      }
    }
  }
`;
export default Menu;
