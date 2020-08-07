import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        const name = this.inputName.value;
        const twitter = this.inputTwitter.value;
        console.log({name, twitter});
        console.log(this.inputName, this.inputTwitter);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChenge = (e) => {
        console.log(e.target.checked);
        this.setState({
            inputTerms: e.target.checked
        });
    }

    render() {
        const {inputName, inputTwitter, inputTerms} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Name: </label>
                        <input 
                            id='name'
                            name='userName'
                            placeholder='Input your name'
                            value={inputName}
                            onChange={ e => this.setState({ inputName: e.target.value }) }
                        />
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input 
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Input your Twitter account'
                            value={inputTwitter}
                            onChange={ e => this.setState({ inputTwitter: e.target.value }) }
                        />
                    </p>
                    <p>
                        <label htmlFor='acceptTerms'></label>
                        <input 
                            onChange={this.handleChenge}
                            type='checkbox'
                            checked={inputTerms}
                        /> Accept Terms
                    </p>
                    <p>
                        {/* <button onClick={this.handleClick}>Enviar</button> */}
                        <button>Enviar</button>
                    </p>
                </form>
            </div>
        )
    }
}