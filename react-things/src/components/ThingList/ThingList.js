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
        let {things, removeItem, updateItem} = this.props
        return (
            <>
                <input id="text"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                />
                <button id="create"onClick={this.handleSubmit}>Create</button>
                <div>
                    <p>List of Things:</p>
                    {things.map((item, index) => {
                        return (
                            <p key={item.id}>
                                <button id="update" onClick={() => updateItem(item.id)}>Update</button>
                                {item.name}
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
