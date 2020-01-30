import React from "react";

class Header extends React.Component {
    render() {
    const list = this.props.list || [];

    return <h2 id="title">Created Things: {list.length} </h2>;
    }
}

export default Header;
