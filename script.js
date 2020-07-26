document.querySelectorAll('.block').forEach(item => {
    item.addEventListener('click', event => {
      addClassToElement(item, )
    })
  })

  function addClassToElement(element, clsName)
  {
        element.className  += " " + clsName;
  }

  function removeClass( element, className ) {
        var cn = element.className;
        var rxp = new RegExp( "s?b"+classname+"b", "g" );
        cn = cn.replace( rxp, '' );
        element.className = cn;
  }

  function removeClasses( element, classses){
      for(var clsName in classes){
        element.className = element.className.replace(new RegExp('(?:^|s)' + clsName + '(?!S)'), '');
      }
  }

  function addClassesToElement(element, classes)
  {
    for(var clsName in classes){
        element.className  += " " + clsName;
    }
  }

  function OnClickBloc(item){
      let id = item.id;

  }

  function addPossibleDiv(outerDivClasses, middleDivClasses, innerDivClasses, item, innerHtml){
        item.
  }

  function removePossibeDivs()
  {

  }

  <div class="parent">
        <div class="middle">
            <div class="circle">
                
            </div>
        </div>
    </div>
    function addPossibleEmptyDiv(id){
        
    }

    <div class="highlight-parent">
        
    <div class="highlight-circle"> 
        &#9822;
    </div>
    </div>
    function addPossiblePawnDiv{

    }

    <div class="check-circle check-animation">
            &#9818;
    </div>
    function addPossibleCheckDiv{

    }
  // BoardCode 

  let ChessBoard = [
      [-4, -3, -2, -6, -5, -2, -3, -4],
      [-1, -1, -1, -1, -1, -1, -1, -1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [4, 3, 2, 5, 6, 2, 3, 4],
  ];

  let possibleMoves = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let unSafePlaces = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    
  ];

  let previousChessBoards = [

  ];

  let moves = [

  ];

  function getPossibleMoves(id){
        var row, column = translateIdtoElement(elementId);
        var pawn = ChessBoard[row][column];
        let i = 0;
        let j = 0;
        switch(pawn){
            case 1:
                
                if(row == 1){
                    i = i+2;
                    while(i>=0 && i<=7 && j>=0 && j<=7){

                    } 
                }
        }      
  }

  function getCrossMoves(row, col, isSoldier, isKing){

  }
  function getStraightMoves(row, col, isWhite, isSoldier, isKing){
        let moves = [], i = row, j = col;
        
        
  }
  function LMoves(row, col){

  }
  

  function translateIdtoElement(elementId) {
        let row = parseInt(elementId.charAt(1)) -1;
        let column = getNumber(elementId.ChartAt(0));
        return{
            row,
            column
        };
  }

  function translateElementIntoId(i, j){
      let row = toString(i+1);
      let col = getAlphabet(literal);
      return row+col;
  }

  function getNumber(literal){
        switch(literal){
            case 'a':
                return 0;
            case 'b':
                return 1;
            case 'c':
                return 2;
            case 'd':
                return 3;
            case 'e':
                return 4;
            case 'f':
                return 5;
            case 'g':
                return 6;
            case 'h':
                return 7;
        }
        return -1;
  }

  function getAlphabet(literal){
        switch(literal){
            case 0:
                return 'a';
            case 1:
                return 'b';
            case 2:
                return 'c';
            case 3:
                return 'd';
            case 4:
                return 'e';
            case 5:
                return 'f';
            case 6:
                return 'g';
            case 7:
                return 'h';
      }
      return "";
  }

  function getBlackElement(literal){
      switch(literal){
        // case for no pawn
        case 0:
            return "";
        // case for soldier
        case -1:
            return "&#9823";//black
        case 1:
            return "&#9817;"; // white
        // case for senapati
        case -2:
            return "&#9821;";//black
        case 2:
            return "&#9815;";// white
        // case for horse
        case -3:
            return "&#9822;";//black
        case 3:
            return "&#9816;";//white
        // case for elephant
        case -4:
            return "&#9820;";//black
        case 4:
            return "&#9817;";//white
        // case for Minister
        case -5:
            return "&#9819;";//black
        case 5:
            return "&#9813;";//white
        // case for King
        case -6:
            return "&#9818";//black
        case 6:
            return "&#9812;";//white
           
      }
  }



  

  

 