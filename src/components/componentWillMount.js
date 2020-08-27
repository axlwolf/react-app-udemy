import React, { Component } from 'react';

class ComponentWillMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Initial message'
        };
    }

    componentWillMount = () => {
        this.setState({
            message: 'Second message'
        });
    }
    
    render() {
        const {message} = this.state;
        return (
            <>
                <h4>
                    Ciclo de vida: componentWillMount
                </h4>
                <p>
                    {message}
                </p>
            </>
        )
    }
}

export default ComponentWillMount;