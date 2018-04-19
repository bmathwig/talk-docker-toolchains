import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
    constructor(props, state) {
        super(props, state);

        this.state = {
            bananaServiceData: null,
            potatoServiceData: null
        }
    }

    getBananaServiceData() {
        fetch("/api/bananas", {
            method: 'GET'
        })
        .then( response => response.json() )
        .then( results => {
            this.setState({ bananaServiceData: results.join(',') });
        });
    }

    getPotatoServiceData() {
        fetch("/api/potatos", {
            method: 'GET'
        })
        .then( response => response.text() )
        .then( result => {
            this.setState({ potatoServiceData: result });
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Welcome to Grocery Application!</h1>
                <p>
                    Banana Service Data:
                    { this.state.bananaServiceData }
                </p>
                <p>
                    Potato Service Data:
                    { this.state.potatoServiceData }
                </p>             
                <button onClick={this.getBananaServiceData.bind(this)}>Bananas</button>
                <button onClick={this.getPotatoServiceData.bind(this)}>Potatos</button>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
  <Application />,
  document.getElementById('application')
);