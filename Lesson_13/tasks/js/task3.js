"use strict"

//Задача №3
// Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.

if (confirm('Start?')) {
	function ticTacToeCombinations(board) {
		const emptyCells = []
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board[i][j] === ' ') {
					emptyCells.push([i, j]) 
				}
			}
		}

		function generateCombinations(currentBoard, cells, player) {
			if (cells.length === 0) {
				currentBoard.forEach(row => {
					document.write(row.join(' ') + '<br>')
				})
				document.write('<hr>')
				return
			}

			const [row, col] = cells[0] 
			const nextCells = cells.slice(1)

			const nextPlayer = player === 'X' ? 'O' : 'X'

			const boardWithX = currentBoard.map(r => [...r])
			boardWithX[row][col] = player;
			generateCombinations(boardWithX, nextCells, nextPlayer)

			const boardWithO = currentBoard.map(r => [...r])
			boardWithO[row][col] = nextPlayer
			generateCombinations(boardWithO, nextCells, nextPlayer)
		}

		generateCombinations(board, emptyCells, 'X')
	}

	const initialBoard = [
		['X', ' ', 'O'],
		[' ', 'O', ' '],
		[' ', ' ', 'X'],
	]

	ticTacToeCombinations(initialBoard)
}
