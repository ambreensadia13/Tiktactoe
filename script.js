let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let gameActive = true;

function play(index) {
    if (!gameActive) return;
    if (board[index] !== "") return;

    board[index] = turn;

    let cells = document.querySelectorAll(".cell");
    cells[index].innerHTML = turn;

    if (checkWin()) {
        document.getElementById("status").innerHTML =
            "Player " + turn + " Wins!";
        gameActive = false;
        return;
    }

    if (board.every(b => b !== "")) {
        document.getElementById("status").innerHTML = "Game Draw!";
        gameActive = false;
        return;
    }

    turn = (turn === "X") ? "O" : "X";
    document.getElementById("status").innerHTML =
        "Player " + turn + " Turn";
}

function checkWin() {
    const win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return win.some(p =>
        board[p[0]] === turn &&
        board[p[1]] === turn &&
        board[p[2]] === turn
    );
}

// ✅ RESET FIX (THIS FIXES YOUR PROBLEM)
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    gameActive = true;

    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerHTML = "";
        cell.className = "cell";
    });

    document.getElementById("status").innerHTML = "Player X Turn";
}