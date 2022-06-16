import React, { Component, HTMLAttributes } from 'react';
import "./Field.css"
import Column from "../Column/Column";

interface Props {

}
interface State {
  isGameOn: boolean,
  score: number;
}

class Field extends Component<Props & HTMLAttributes<HTMLDivElement>, State> {

  private maxLength: number;
  private height: number;
  private borderPX: number;
  private isGameOver:boolean;
  constructor(props: Props) {
    super(props);
    this.height = window.innerHeight - 100;
    this.borderPX = 1;
    this.maxLength = this.height - this.borderPX;
    this.state = {
      isGameOn: false,
      score: 0,
    }
    this.isGameOver = false;

  }

  isGameOn = (): boolean => this.state.isGameOn;
  increaseScore = (value: number): void => {
    this.setState({
      score: this.state.score + value
    });

  };
  gameOver = (): void => {
    if (!this.isGameOver) {
      this.isGameOver = true;
      alert(`Игра оконченна. Вас счет ${this.state.score}.`);
      this.setState({
        isGameOn: false
      });
    }

  }
  render() {
    return <div className="Field">
      <div className="row">
        <div className='col-9'>
          <div className='columns'
            style={{ height: this.height, border: "black " + this.borderPX + "px solid" }}>
            <div className='row d-flex justify-content-around'>
              <Column maxLength={this.maxLength}
                isGameOn={this.isGameOn}
                increaseScore={this.increaseScore}
                gameOver={this.gameOver} />

              <Column maxLength={this.maxLength}
                isGameOn={this.isGameOn}
                increaseScore={this.increaseScore}
                gameOver={this.gameOver} />

              <Column maxLength={this.maxLength}
                isGameOn={this.isGameOn}
                increaseScore={this.increaseScore}
                gameOver={this.gameOver} />

              <Column maxLength={this.maxLength}
                isGameOn={this.isGameOn}
                increaseScore={this.increaseScore}
                gameOver={this.gameOver} />

              <Column maxLength={this.maxLength}
                isGameOn={this.isGameOn}
                increaseScore={this.increaseScore}
                gameOver={this.gameOver} />

              <Column maxLength={this.maxLength}
                isGameOn={this.isGameOn}
                increaseScore={this.increaseScore}
                gameOver={this.gameOver} />

              <Column maxLength={this.maxLength}
                isGameOn={this.isGameOn}
                increaseScore={this.increaseScore}
                gameOver={this.gameOver} />
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='score'>Счет: {this.state.score}</div>
          <div className='d-flex flex-column'>
            <button type="button" className="btn btn-primary"
              disabled={this.state.isGameOn}
              onClick={() => {
                this.setState({
                  isGameOn: true,
                  score: 0
                });
                this.isGameOver = false;
              }}>
              Новая игра
            </button>
            <button type="button" className="btn btn-danger"
              disabled={!this.state.isGameOn}
              onClick={() => {
                this.gameOver();
              }}>
              Стоп
            </button>
          </div>

        </div>

      </div>
    </div>
  }


}

export default Field;
