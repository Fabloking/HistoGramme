import React, { Component } from 'react'
import Histogram from 'react-chart-histogram';
import './Histo.css';

class Histo extends Component {
    constructor (props) {
      super(props)
      this.state = { 
            labels: ['2016', '2017', '2018'],
            data: [324, 45, 672],
            options: { fillColor: '#A9A9A9', strokeColor: '#696969' }
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          5000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    tick() {
        this.setState({
            data: [this.getRandomInt(1000), this.getRandomInt(1000), this.getRandomInt(1000)]
        });
    }
  
    render () {
        return (
          <div className="background">
            <h1 className="title">Histogramme</h1>
            <Histogram
                xLabels={this.state.labels}
                yValues={this.state.data}
                width='1000'
                height='400'
                options={this.state.options}
            />
            <p>Valeurs aléatoires toutes les 5 secondes</p>
          </div>
        )
    }
  }

  export default Histo;