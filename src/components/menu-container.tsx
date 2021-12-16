import React, { VFC } from "react";

const MenuContainer: VFC<{ Component: VFC }> = ({ Component }) => {
    return <div className="menu-container"><Component /></div>;
};

export default MenuContainer;