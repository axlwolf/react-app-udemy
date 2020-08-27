import React, { Component } from 'react';
const API_COINDESK = 'https://api.coindesk.com/v1/bpi/currentprice.json'

export default class FetchExample extends Component {
    state = {bpi: {}};
    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                bpi: data.bpi
            });
        });
        // .catch(e => console.log(e));
    }

    _renderCurrencies () {
        console.log(this.state.bpi);
        const { bpi } = this.state;
        const currencies = Object.keys(bpi);
        return currencies.map((currency, index) => 
            (
                <div key={currency}>
                    1 BTC is {bpi[currency].rate}
                    <span> {currency}</span> 
                </div>
            )
        )
    }

    render() {
        return(
            <>
                <h4>
                    Fetch example (Bitcoin Price Index)
                </h4>
                {this._renderCurrencies()}
            </>
        )
    }

}