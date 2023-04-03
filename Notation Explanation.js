function Pawn() {

	document.getElementById("Pawn").style.backgroundColor = "lightgreen";
	var pg = document.getElementById("chessParagraph");
	pg.innerHTML = "Pawns are special in the sense that we do not specify that it is a pawn, but rather just the square they move to. For example, pawn to e4 (King's pawn opening)";
	var img = document.getElementById("imageBox")
	img.innerHTML = "<img src='images/pawn.png' style='max-width:100%; max-height:100%;'>";
}

function Knight() {
	document.getElementById("Knight").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Knights are specially annotated, since the King is letter K, we notate the knight with the letter N, followed by the square they move to. For example, Nf3 is a knight move to f3.";
	var img = document.getElementById("imageBox")
	img.innerHTML = "<img src='images/knight.png' style='max-width:100%; max-height:100%;'>";
}

function Bishop() {
	document.getElementById("Bishop").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Bishops are notated with the letter B, followed by the square they move to. For example, Bd5 is a bishop move to the D5 square. Note that there are two bishops, so if you lose one and do not promote, your bishops can only attack on color squares.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/bishop.png' style='max-width:100%; max-height:100%;'>";
}

function Rook() {
	document.getElementById("Rook").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Rooks are notated with the letter R, followed by the square they move to. For example, Re1 is a rook move to E1.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/rook.png' style='max-width:100%; max-height:100%;'>";
}

function Queen() {
	document.getElementById("Queen").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Queens are annotated with the letter Q, followed by the square they move to. For example, Qd4 is a queen move to d4.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/queen.png' style='max-width:100%; max-height:100%;'>";
}

function King() {
	document.getElementById("King").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "The king is annotated with the letter K, followed by the square they move to. For example, Kg2 is a king move to g2.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/king.png' style='max-width:100%; max-height:100%;'>";
}

function Capture() {
	document.getElementById("Capture").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "On a capture, we annotate the piece that is capturing, followed by an x, followed by the square that is being captured. For example, Nxf8 is a knight capture on f8.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/capture.png' style='max-width:100%; max-height:100%;'>";
}

function Check() {
	document.getElementById("Check").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "A check is a very simple annotation. When we have a piece that delivers check, we put a + after the move. For example, Qf8+ is a Queen move to f8, delivering check.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/check.png' style='max-width:100%; max-height:100%;'>";
}

function Checkmate() {
	document.getElementById("Checkmate").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Very similar to a check, a checkmate notation is a hash symbol (#) following the move. For example, Qf8# is a Queen move to f8, delivering checkmate.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/checkmate.png' style='max-width:100%; max-height:100%;'>";
}

function Promotion() {
	document.getElementById("Promotion").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Promotion is one of the longest annotations, and is indicated with the equals symbol (=). When a pawn promote to a different piece, it is annotated with the square it moved to, followed by the equals symbol, followed by the piece it is promoted to. For example, f8=Q is a pawn promotion to a queen on f8.";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/promotion.png' style='max-width:100%; max-height:100%;'>";
}

function KingCastle() {
	document.getElementById("KingCastle").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Castling is a special case move that occurs when there is a clear line of sight between a friendly rook, the king, and neither piece has been moved. If the king castles to the closest square, it is annotated with O-O";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/kingcastle.png' style='max-width:100%; max-height:100%;'>";
}

function QueenCastle() {
	document.getElementById("QueenCastle").style.backgroundColor = "lightgreen";
  var pg = document.getElementById("chessParagraph");
  pg.innerHTML = "Castling is a special case move that occurs when there is a clear line of sight between a friendly rook, the king, and neither piece has been moved. If the king castles to the farthest square (Queen Side), it is annotated with O-O-O. It is called a Queen Side Castle";
	var img = document.getElementById("imageBox");
	img.innerHTML = "<img src='images/queencastle.png' style='max-width:100%; max-height:100%;'>";
}


Pawn()
Knight()
Queen()
King()
Bishop()
Rook()
Checkmate()
Check()
QueenCastle()
Capture()
Promotion()
KingCastle()