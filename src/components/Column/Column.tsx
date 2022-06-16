import React, { Component, HTMLAttributes } from 'react';
import './Сolumn.css';

interface Props {
  maxLength: number;
  isGameOn: () => boolean;
  increaseScore: (value: number) => void;
  gameOver: () => void;
}
interface State {
  currentLength: number;
}

class Сolumn extends Component<Props & HTMLAttributes<HTMLDivElement>, State>{

  private maxLength: number;
  private timerId?: NodeJS.Timer;
  private isGameOn: () => boolean;
  private increaseScore: (value: number) => void;
  private gameOver: () => void;
  private factor: number;


  constructor(props: Props) {
    super(props);
    this.maxLength = props.maxLength;
    this.isGameOn = props.isGameOn;
    this.increaseScore = props.increaseScore;
    this.gameOver = props.gameOver;
    this.timerId = undefined;

    this.factor = Math.floor((Math.random() * 55) + 15);
    this.state = {
      currentLength: 0
    }

  }

  render() {
    return <div onClick={
      () => {
        let value = Math.round(this.state.currentLength / 2);
        this.setState({
          currentLength: value
        })
        this.increaseScore(value);
      }} className='Сolumn'
      style={{ height: this.state.currentLength }}>
    </div>;
  }

  componentDidMount() {
    //this.start();
  }

  componentDidUpdate() {
    if (this.isGameOn())
      this.start();
    else
      this.stop();

  }

  start = () => {
    if (this.timerId === undefined) {
      this.timerId = setInterval(this.updateLength, 1000);
      if (this.state.currentLength !== 0){
        this.setState({
          currentLength: 0
        })
        this.factor = Math.floor((Math.random() * 55) + 15);
      }
        
    }
  }

  stop = () => {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  updateLength = () => {
    if (this.state.currentLength >= this.maxLength) {
      this.stop();

      if (this.isGameOn()) {
        this.gameOver();
      }

    }
    else {
      let newLength = this.state.currentLength + this.factor;
      if (newLength > this.maxLength) {
        newLength = newLength - (newLength - this.maxLength);
      }
      this.setState({
        currentLength: newLength
      })

    }

  };

}

export default Сolumn;
