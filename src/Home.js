import React, { Component } from 'react';

const List = (props) => (
    <ul>
        {
            props.items.map((item, i) => {
                return <li key={i}>{item}</li>
            })
        }
    </ul>
)

class Home extends Component {
    constructor() {
        super();
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://node-red-nxdup.mybluemix.net/productos/reloj/2',  {method: 'GET'})
        .then(result=>result.json())
        .then(items=>this.setState({
            done: true,
            items
        }))
    }

    render() {
        return(

            <div className="App">
            <header className="App-header2">
              <p>e-Commers Gapsi</p>
            </header>
            <div>

            
                {this.state.done && this.state.items.isArray() ? (
                    <List items={...this.state.items} />
                ) : (
                    <p>Cargando resultados...</p>
                )}
            
            </div>
            <footer className="App-footer">version 0.0.1</footer>
          </div>

        )
    }
}

export default Home