
var gameOver = false;
var numberOfMoves = 0;
var currentPlayer = 1;
//Handle Clicks
$(".cell").click(function (event) {

    // console.log(matrix);
    if (gameOver) {
        $(".verdict").text("Start New Game");
        reset();
    } else if (numberOfMoves == 9) {
        $(".verdict").text("Start New game");
        reset();
    } else {
        if (currentPlayer == 1)
            currentPlayer = 2;
        else
            currentPlayer = 1;

        numberOfMoves++;
        var cellClicked = event.target.attributes[0].value[5];
        // console.log(cellClicked);
        playGame(cellClicked);
    }
});


function reset() {
    gameOver = false;
    var change = "#cell-";
    var count = 1;
    numberOfMoves = 0;
    for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 3; ++j) {
            var c = change + count;
            $(c).text("");
            count++;
            matrix[i][j] = -1;
        }
    }

}

/**
 * MINIMAX ALGORITHM HERE
 */
var matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

/**
 * MINIMAX ALGORITHM ENDS HERE
 */


//LETS MAKE THE MOVES HERE



var winner = -1;
function playGame(clickedCell) {


    var changeText = "#cell-" + clickedCell;
    if (clickedCell == '1') {
        if (matrix[0][0] != -1) {
            return;
        } else {

            if (currentPlayer == 1) {
                matrix[0][0] = 0;

                $(changeText).text("O");
            } else {
                matrix[0][0] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }

    } else if (clickedCell == '2') {
        if (matrix[0][1] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[0][1] = 0;

                $(changeText).text("O");
            } else {
                matrix[0][1] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }

        }

    } else if (clickedCell == '3') {
        if (matrix[0][2] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[0][2] = 0;

                $(changeText).text("O");
            } else {
                matrix[0][2] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }
    } else if (clickedCell == '4') {
        if (matrix[1][0] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[1][0] = 0;

                $(changeText).text("O");
            } else {
                matrix[1][0] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }
    } else if (clickedCell == '5') {
        if (matrix[1][1] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[1][1] = 0;

                $(changeText).text("O");
            } else {
                matrix[1][1] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }
    } else if (clickedCell == '6') {
        if (matrix[1][2] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[1][2] = 0;

                $(changeText).text("O");
            } else {
                matrix[1][2] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }
    } else if (clickedCell == '7') {
        if (matrix[2][0] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[2][0] = 0;

                $(changeText).text("O");
            } else {
                matrix[2][0] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }
    } else if (clickedCell == '8') {
        if (matrix[2][1] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[2][1] = 0;

                $(changeText).text("O");
            } else {
                matrix[2][1] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }
    } else if (clickedCell == '9') {
        if (matrix[2][2] != -1) {
            return;
        } else {
            if (currentPlayer == 1) {
                matrix[2][2] = 0;

                $(changeText).text("O");
            } else {
                matrix[2][2] = 1;
                $(changeText).text("X");
            }

            if (playerwon(1) || playerwon(0)) {
                gameOver = true;
                $(".verdict").text("Congrats! Player " + winner + " Won");
                return;
            }
            if (numberOfMoves == 9 && gameOver == false) {
                $(".verdict").text("Its a draw");
                gameOver = true;
            }
        }
    }

}




//check if anyone won

function playerwon(id) {
    if (matrix[0][0] == id && matrix[0][1] == id && matrix[0][2] == id) {
        winner = id + 1;
        return true;
    }
    else
        if (matrix[1][0] == id && matrix[1][1] == id && matrix[1][2] == id) {
            winner = id + 1;
            return true;
        }
        else if (matrix[2][0] == id && matrix[2][1] == id && matrix[2][2] == id) { winner = id + 1; return true; }
        else if (matrix[0][0] == id && matrix[1][0] == id && matrix[2][0] == id) { winner = id + 1; return true; }
        else
            if (matrix[0][1] == id && matrix[1][1] == id && matrix[2][1] == id) { winner = id + 1; return true; }
            else
                if (matrix[0][2] == id && matrix[1][2] == id && matrix[2][2] == id) { winner = id + 1; return true; }
                else if (matrix[0][0] == id && matrix[1][1] == id && matrix[2][2] == id) { winner = id + 1; return true; }
                else if (matrix[0][2] == id && matrix[1][1] == id && matrix[2][0] == id) { winner = id + 1; return true; }


    return false;
}