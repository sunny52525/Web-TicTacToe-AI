var gameOver = false;
var numberOfMoves = 0;

//Handle Clicks
$(".cell").click(function (event) {
    console.log(matrix);
    if (gameOver) {
        $(".verdict").text("Start New Game");
        reset();
    } else if (numberOfMoves == 4) {
        $(".verdict").text("Start New Game");
        reset();
    } else {
        var cellClicked = event.target.attributes[0].value[5];
        // console.log(cellClicked);
        playGame(cellClicked);
    }

   console.log(matrix); 
});


function reset() {
    gameOver = false;
    var change="#cell-";
    var count=1;
    numberOfMoves = 0;
    for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 3; ++j) {
            var c=change+count;
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
]

// MINIMAX Algorithm Credit : Geeks For Geeks

var player =1,opponent=0;
// MINIMAX Algorithm Credit : Geeks For Geeks
function isMovesLeft(board){
    for(var i =0 ; i<3 ;i++){
        for(var j =0 ; j<3 ;j++){
            if(board[i][j]==-1)
                return true;
        }
    }
    return false;
}


function evaluate(b){
    //Checking for victory (row)
    for(var row =0 ; row<3;row++){
        if(b[row][0]==b[row][1] && b[row][1]==b[row][2]){

            if (b[row][0] == player) 
                return 10;
            else if (b[row][0] == opponent) 
                return -10;
        }
    }
    //checking for victory (column)
    for(var col =0 ; col< 3 ;col++){

        if (b[0][col] == b[1][col] &&  b[1][col] == b[2][col]) {
            if (b[0][col] == player) 
                return 10;
            else if (b[0][col] == opponent) 
                return -10;
        }
    }

    //Diagonals
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
        if (b[0][0] == player)
             return 10;
         else if (b[0][0] == opponent) 
            return -10;
    }
    if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {
        if (b[0][2] == player) 
            return 10; 
        else if (b[0][2] == opponent) 
            return -10;
    }

    // Else if none of them have won then return 0
    return 0

}

function minimax(board,depth,isMax){

    var score=evaluate(board);
    // console.log(score);
    // Maximizer Won
    if(score==10) 
        return score;
    //Minimizer Won
    if(score==-10)
        return score;

    // No One Won Yet
    if(isMovesLeft(board)==false)
        return 0;
    
    
    if(isMax){
        var best=-1000
        for(var i = 0 ; i<3 ;i++){
            for(var j  = 0 ; j<3 ;j++){
                if(board[i][j]==-1){
                    
                    board[i][j]=player;

                    //Call MiniMax recursively to chose max Value
                    best=Math.max(best,minimax(board,depth+1,!isMax));
                    
                    board[i][j]=-1;
                }
            }
        }
        return best;
    } else{
        var best=1000
        for(var i = 0 ; i<3 ;i++){
            for(var j  = 0 ; j<3 ;j++){
                if(board[i][j]==-1){
                    
                    board[i][j]=opponent;

                    //Call MiniMax recursively to chose max Value
                    best=Math.min(best,minimax(board,depth+1,!isMax));
                    
                    board[i][j]=-1;
                }
            }
        }
        return best;
    }
  
}


function bestMove(board) {
    var bestVal=-1000;
    var moves=[-1,-1];
    for(var i =0 ; i < 3 ; i++){
        for(var j =0 ; j < 3 ; j++){
            //if cell is empty
            if(board[i][j] == -1){
                //make this move
                board[i][j]=player;
                
                var moveVal= minimax(board,0,false);

                board[i][j]=-1;

                if(moveVal>bestVal){
                    moves[0]=i;
                    moves[1]=j;
                    bestVal=moveVal
                }

            }
        }
    }
    return moves
}
/**
 * MINIMAX ALGORITHM ENDS HERE
 */


//LETS MAKE THE MOVES HERE

function playGame(clickedCell) {
  
    
    var changeText="#cell-"+clickedCell;
    if (clickedCell == '1') {
        if (matrix[0][0] != -1) {
            return;
        } else {
            $(changeText).text("0");
            // console.log(changeText)
            matrix[0][0] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)");
                return;
            }
            var best = bestMove(matrix);
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }

    } else if (clickedCell == '2') {
        if (matrix[0][1] != -1) {
            return;
        } else {
            $(changeText).text("0");
            // console.log(changeText)
            
            matrix[0][1] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)");
                return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }

    } else if (clickedCell == '3') {
        if (matrix[0][2] != -1) {
            return;
        } else {
            $(changeText).text("0");
            // console.log(changeText)
            
            matrix[0][2] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)"); return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }
    } else if (clickedCell == '4') {
        if (matrix[1][0] != -1) {
            return;
        } else {
            $(changeText).text("0");
            // console.log(changeText)

            
            matrix[1][0] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)"); return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }
    } else if (clickedCell == '5') {
        if (matrix[1][1] != -1) {
            return;
        } else {
            $(changeText).text("0");
            // console.log(changeText)
            
            matrix[1][1] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)");  return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }
    } else if (clickedCell == '6') {
        if (matrix[1][2] != -1) {
            return;
        } else {
            console.log(numberOfMoves);
            matrix[1][2] = 0;
            $(changeText).text("0");
            // console.log(changeText)
            
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)");  return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }
    } else if (clickedCell == '7') {
        if (matrix[2][0] != -1) {
            return;
        } else {
            $(changeText).text("0");
            // console.log(changeText)
            
            matrix[2][0] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)");  return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }
    } else if (clickedCell == '8') {
        if (matrix[2][1] != -1) {
            return;
        } else {
            $(changeText).text("0");

            // console.log(changeText)
            
            matrix[2][1] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)");  return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }
    } else if (clickedCell == '9') {
        if (matrix[2][2] != -1) {
            return;
        } else {
            $(changeText).text("0");
            // console.log(changeText)
            
            matrix[2][2] = 0;
            if (playerwon(0)) { 
                gameOver = true;
                $(".verdict").text("You broke the game(haha,somethings wrong,If you reached here then pls report the moves)");  return;
            }
            var best = bestMove(matrix);
            
            console.log("Best move was"+best);
            matrix[best[0]][best[1]] = 1;
            botmove(best);
        }
    }
   
}



//BOTMOVES CHANGE TEXTS
function botmove(moves) {
//   alert(moves[0] + "-" + moves[1]);
    ++numberOfMoves;
    var count=1;
    var flag=false;
    //change texts here
    for(var i = 0 ;i<3 ;++i){
        for(var j=0 ;j<3 ;++j){
            if(moves[0]==i && moves[1]==j ){

                var change="#cell-"+count;
                console.log("change is " + change)
                $(change).text("X");
                flag=true;
                break;
               
            }

            ++count;
        }
        if(flag)
            break;
    }

    // console.log(moves)

    if(playerwon(1)){
        $(".verdict").text("You Lost :(");
        $("#computer-point").text(parseInt($("#computer-point").text())+1);
        gameOver=true;
        return;
    }
    if(numberOfMoves==4){
        $(".verdict").text("Its a Draw");
        $("#tie-point").text(parseInt($("#tie-point").text())+1);
        return;
    }


}


//check if anyone won

function playerwon(id) {
    if (matrix[0][0] == id && matrix[0][1] == id && matrix[0][2] == id)
        return true
    else
    if (matrix[1][0] == id && matrix[1][1] == id && matrix[1][2] == id)
        return true
    else if (matrix[2][0] == id && matrix[2][1] == id && matrix[2][2] == id)
        return true
    else if (matrix[0][0] == id && matrix[1][0] == id && matrix[2][0] == id)
        return true
    else
    if (matrix[0][1] == id && matrix[1][1] == id && matrix[2][1] == id)
        return true
    else
    if (matrix[0][2] == id && matrix[1][2] == id && matrix[2][2] == id)
        return true
    else if (matrix[0][0] == id && matrix[1][1] == id && matrix[2][2] == id)
        return true
    else if (matrix[0][2] == id && matrix[1][1] == id && matrix[2][0] == id)
        return true

    return false
}
