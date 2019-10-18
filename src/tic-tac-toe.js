class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.matrix = [['', '', ''], 
                       ['', '', ''], 
                       ['', '', '']];
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.playerSymbol;
            if (this.playerSymbol === 'x') {
                this.playerSymbol = 'o'; 
            } else {
                this.playerSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } 
        return false; 
    }

    getWinner() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {

                if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2]) {
                    if (this.matrix[i][0]) return this.matrix[i][0];
                }
                
                if (this.matrix[0][j] === this.matrix[1][j] && this.matrix[1][j] === this.matrix[2][j]) {
                    if (this.matrix[0][j]) return this.matrix[0][j];
                }
            }
        }

        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
            if (this.matrix[0][0]) return this.matrix[0][0];
        }

        if (this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2]) {
            if (this.matrix[2][0]) return this.matrix[2][0];
        }

        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (!this.matrix[i][j]) return false;
            }
        }

        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
