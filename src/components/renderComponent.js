import React, { Component } from 'react';

const HelloRender = (props) => <h1>Holla Render!</h1>

class RenderComponent extends Component {
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
                    Ciclo de vida: Render
                </h4>
                <HelloRender />
                <HelloRender />
                <HelloRender />
                <p>
                    {message}
                </p>
            </>
            // this.state.message == 'Second message' ? 'sip!' : null
        )
    }
    
}

export default RenderComponent;