import React from 'react';

class ThingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    handleSubmit = (e) => {
        if (this.state.name) {
            this.props.addItem(this.state.name)
            this.setState({
                name: ""
            });
        }
        e.preventDefault();
    };

    handleChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    render() {
        let {list, removeItem} = this.props
        return (
            <>
                <input id="text"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                />
                <button id="create"onClick={this.handleSubmit}>Create</button>
                <div>
                    <p>List of Things:</p>
                    {list.map((item, index) => {
                        return (
                            <p key={index}>
                                {item}
                                <button id="delete"onClick={() => removeItem(index)}>Delete</button>
                            </p>
                        );
                    })}
                </div>
            </>
        )
    }
};

export default ThingList
