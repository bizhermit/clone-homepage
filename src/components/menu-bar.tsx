import { VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkLabel = styled.span`
display: inline-block;
min-width: 120px;
padding: 0px 10px;
text-align: center;
text-decoration: underline;

&:hover {
  font-weight: bold;
}
`;

const MenuBar: VFC = () => {
  return (
    <div>
      <Link to="/"><LinkLabel>INDEX</LinkLabel></Link>
      <Link to="/summary"><LinkLabel>SUMMARY</LinkLabel></Link>
    </div>
  );
};

export default MenuBar;