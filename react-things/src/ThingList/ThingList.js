import React from 'react';

class ThingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            name: ""
        };
    }

    handleEnter = e => {
        e.preventDefault();
        if (e.key === "Enter") {
            this.setState(prevState => ({
                list: prevState.list.concat(this.state.name),
                name: ""
            }));
        }
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    };

    removeItem = index => {
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({ list });
    };

    render() {
        return (
            <>
                <input id="text"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                    onKeyUp={this.handleEnter}
                />
                <div id="things">
                    {this.state.list.map((item, index) => {
                return (
                    <p key={index}>
                    {item}
                    <button onClick={() => this.removeItem(index)}>Delete</button>
                    </p>
                    );
                })}
                </div>
            </>
        )
    }
};

export default ThingList
