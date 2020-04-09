import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: string[];
  xIsNext: boolean;
  winner: string;
  isDraw = false;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isDraw = false;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (this.winner) {
      return;
    }

    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  getActiveClass(): string {
    let className = '';
    if (this.player === 'X') {
      className = 'alert-dark';
    } else if (this.player === 'O') {
      className = 'alert-primary';
    }
    return className;
  }

  private calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let winner = '';

    lines.some((item, i) => {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        winner = this.squares[a];
        return !!winner;
      }
    });

    const filter = this.squares.filter(value => !!value);

    if (filter.length === this.squares.length && !winner) {
      this.isDraw = true;
    }

    return winner;
  }

}
