import { VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuBarWrap = styled.div`
position: sticky;
top: 0px;
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-items: flex-end;
background: #345;
color: #fff;
`;
const MenuBarTitle = styled.span`
display: inline-block;
font-size: 28px;
padding: 0px 20px;
`;
const MenuBarItems = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: flex-end;
align-items: flex-start;
flex: 1;
`;
const LinkLabel = styled.span`
display: inline-block;
min-width: 120px;
padding: 0px 10px;
text-align: center;
text-decoration: underline;
color: #fff;

&:hover {
  font-weight: bold;
}
`;

const MenuBar: VFC = () => {
  return (
    <MenuBarWrap>
      <MenuBarTitle>Biz Hermit</MenuBarTitle>
      <MenuBarItems>
        <Link to="/"><LinkLabel>INDEX</LinkLabel></Link>
        <Link to="/summary"><LinkLabel>SUMMARY</LinkLabel></Link>
      </MenuBarItems>
    </MenuBarWrap>
  );
};

export default MenuBar;