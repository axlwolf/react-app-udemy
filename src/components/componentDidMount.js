import React, { Component } from 'react';

class ComponentDidMount extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            scroll: 0
        };
    }

    componentWillMount() {
        console.log('ComponentDidMount');
    }

    componentDidMount() {
        console.log('ComponentDidMount');
        document.addEventListener('scroll', () => {
            this.setState({
                scroll: window.scrollY
            })
        });
    }

    render() {
        console.log('render');
        const { scroll} = this.state;
        return(
            <>
                <p> El scrol es:
                    <strong>
                        {scroll}
                    </strong>
                </p>
                <h4>
                    Ciclo de montaje: ComponentDidMount
                </h4>
                <p>
                    Cosas de la vida
                </p>
                <p>
                    Como si se puede hacer esto.
                </p>
                
            </>
        )
    }
}

export default ComponentDidMount;