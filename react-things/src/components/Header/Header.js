import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let {length} = this.props
        return <h2>Created Things: {length} </h2>;
    }
}

export default Header;
