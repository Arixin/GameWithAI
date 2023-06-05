import random
import tabulate

def get_board(y:int, x:int):
    return [ [None]*y for _ in range(x) ]

def populate(board:list, bomb_amount:int):
    rows = len(board)
    cols  = len(board[0])
    bombs = [(random.randint(0, rows-1), random.randint(0, cols-1)) for _ in range(bomb_amount)]
    for coord in bombs:
        board[coord[0]][coord[1]] = '(#)'

    for i in range(rows):
        for j in range(cols):
            if board[i][j] != '(#)':
                count = 0
                for k in range(max(0, i-1), min(i+2, rows)):
                    for l in range(max(0, j-1), min(j+2, cols)):
                        if board[k][l] == '(#)':
                            count += 1
                if count == 0:
                    count = ""
                board[i][j] = count

    return board


def print_table(table):
    print(tabulate.tabulate(table, tablefmt='fancy_grid'))

if __name__ == '__main__':
    board = get_board(10, 5)
    board = populate(board, 25)

    print_table(board)
