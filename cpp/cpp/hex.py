"""
\___/ # \___/   \___/   
/ # \___/ 1 \___/   \   
\___/ 2 \___/   \___/   
/ 1 \___/   \___/   \   
\___/   \___/   \___/   
/   \___/   \___/   \   



"""

import random
import tabulate
import math

def get_board(y:int, x:int):
    return [ [None]*y for _ in range(x) ]

def populate(board:list, bomb_amount:int):
    _edges = [(-1, -1), (0, -1), (1, -1), (1, 0), (0, 1), (-1, 0)]

    rows = len(board)
    cols  = len(board[0])
    bombs = [(random.randint(0, rows-1), random.randint(0, cols-1)) for _ in range(bomb_amount)]
    for coord in bombs:
        board[coord[0]][coord[1]] = '#'

    for i in range(rows):
        for j in range(cols):
            if board[i][j] != '#':
                count = 0
                for (k, l) in _edges:
                    k = i + k
                    l = j + l
                    if k in range(0, rows) and l in range(0, cols):
                        if board[k][l] == '#':
                            count += 1
                if count == 0:
                    count = " "
                board[i][j] = str(count)

    return board


def print_table(table):
    print(tabulate.tabulate(table, tablefmt='fancy_grid'))

# def print_hex_grid(grid):
#     rows = len(grid)
#     cols = len(grid[0])
    
#     fill = "\___/   "
#     main_left = "/ "
#     main_right= " \___"

#     for r in range(2*rows):

def print_hex_grid(grid):
    rows = len(grid)
    cols = len(grid[0])
    row = 0
    r_pass = 0

    fill0 = " ___    "
    fill1 = "   \___/"
    fill2 = "___"
    main_left = "/ "
    main_right= " \\"

    for _ in range(math.ceil(cols/2)):
        print(fill0, end="")
    print("")

    for r in range(2*rows):
        if r_pass == 1:
            print("\\", end="")
        if r_pass == 2:
            r_pass = 0
            row += 1
        for id, e in enumerate(grid[row]):
            if id%2 == r_pass: print(main_left + e + main_right, end="")
            else: print(fill2, end="")
        
        if r_pass == 1: print("/")
        else: print("")
        r_pass += 1

    print(" ", end="")
    for _ in range(int(cols/2)):
        print(fill1, end="")
    print("")

if __name__ == '__main__':
    board = get_board(15, 3)
    board = populate(board, 5)
    print_table(board)
    print_hex_grid(board)
