class Board{
  constructor(height,width){
    this.width = width
    this.height = height
    this.clearBoard();
  }

  clearBoard(){
    this.board = Array.from(Array(this.height),() => 
      Array.from(Array(this.width),() => 
        0))
  }

  flip(i,j){
    this.board[i][j] = 1 - this.board[i][j]
  }
  makeDead(i,j){
    this.board[i][j] = 0
  }
  makeAlive(i,j){
    this.board[i][j] = 1
  }

  inBoard(i,j){
    return ( 
      i >= 0 && 
      i <  this.height && 
      j >= 0 && 
      j < this.width
    )
  }

  neighbours(i,j){
    var nbrs = []
    for(var a=-1; a <= 1; a++){
      var row = []
      for(var b=-1; b <= 1; b++){
        if(a==0 && b==0){ }
        else if( this.inBoard(i+a,j+b) ){ 
          row.push(this.board[i+a][j+b]) }
        else{ }
      }
      nbrs.push(row)
    }
    return nbrs;
  }
  aliveNbrs(i,j){
    var nbrs = this.neighbours(i,j);
    return [].concat(...nbrs).filter( x => x==1 ).length;
  }

  advance(){
    var newBoard = []
    for(var i=0; i < this.height; i++){
      var row = []
      for(var j=0; j < this.width; j++){ row.push(this.advanceSquare(i,j)) }
      newBoard.push(row)
    }
    this.board = newBoard;
    return this;
  }

  advanceSquare(i,j){
    var alives = this.aliveNbrs(i,j);
    if (alives < 2 || alives > 3){ return 0 }
    else if (alives == 2 && (this.board[i][j] == 0)){ return 0 }
    else { return 1 }
  }
}

export default Board;
