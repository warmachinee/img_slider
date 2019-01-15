import React, { Component } from 'react';
import './App.css';
import {Card, CardImg} from './Card';
import Modal from './Modal';
import data from './data/data'
import logo from './assets/logo.svg';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalState: false,
      properties: data.properties,
      property: data.properties[0]
    }
  }
  showModal = () => {
    this.setState({ modalState: true });
    //console.log("Clicked card index = ",value)
  }
  hideModal = () => {
    this.setState({ modalState: false });
  }
  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }
  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  showDetail=()=>{
    window.location.href="/banner";
  }

  render() {
    const {properties, property} = this.state;
    return (
      <div className="App">
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >Prev</button>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length-1}
        >Next</button>
      <div style={{height: '5rem'}}></div>
      <div>
        <div className="col">
          <div className={`cards-slider active-slide-${property.index}`}>
            <div className="cards-slider-wrapper" style={{
                zIndex    : '10',
                transform : `translateX(-${property.index*(100/properties.length)}%)`
              }}>
              {
                properties.map(property =>
                  <Card
                    key={property.index} property={property}
                    onClick={this.showDetail}
                    />)
              }
            </div>
          </div>
        </div>
      </div>
      <Modal title="Test Modal" show={this.state.modalState} handleClose={this.hideModal}>
          <div style={{margin: '2rem 10%'}}>
            <p>Modal</p>
            <p>Data</p>
            <button onClick={this.confirm}>Confirm</button>
          </div>
        </Modal>
    </div>
    );
  }
}

export default App;
