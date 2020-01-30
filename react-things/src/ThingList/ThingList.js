import React from 'react';

class ThingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    handleSubmit = () => {
        this.props.addItem(this.state.name)
        this.setState({
            name: ""
        });
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
                <button onClick={this.handleSubmit}>Submit</button>
                <div id="things">
                    {list.map((item, index) => {
                        return (
                            <p key={index}>
                                {item}
                                <button onClick={() => removeItem(index)}>Delete</button>
                            </p>
                        );
                    })}
                </div>
            </>
        )
    }
};

export default ThingList
