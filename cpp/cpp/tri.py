"""
TODO:
____________________________________
\    /\    /\    /\    /\    /\    /
 \  /  \  /  \  /  \  /  \  /  \  / 
  \/____\/____\/____\/____\/____\/__
  /\    /\    /\    /\    /\    /\  
 /  \  /  \  /  \  /  \  /  \  /  \ 
/____\/____\/____\/____\/____\/____\
\    /\    /\    /\    /\    /\    /
 \  /  \  /  \  /  \  /  \  /  \  / 
__\/____\/____\/____\/____\/____\/__

"""

import random
import tabulate
import math

def get_board(y:int, x:int):
    return [ [None]*y for _ in range(x) ]

def populate(board:list, bomb_amount:int):
    _edges_down = [(-1,-2), (-1,-1), (-1,0), (-1,1), (-1,2), (0,-2), (0,-1), (0,1), (0,2), (1,-1), (1,0), (1,1)]
    _edges_up = [(-1,-1), (-1,0), (-1,1), (0,-2), (0,-1), (0,1), (0,2), (1,-2), (1,-1), (1,0), (1,1), (1,2)]

    rows = len(board)
    cols  = len(board[0])
    bombs = [(random.randint(0, rows-1), random.randint(0, cols-1)) for _ in range(bomb_amount)]
    for coord in bombs:
        board[coord[0]][coord[1]] = '#'

    for i in range(rows):
        for j in range(cols):
            if board[i][j] != '#':
                count = 0
                _edges = _edges_up
                if (i % 2 == 0 and j % 2 == 0) or (i % 2 == 1 and j % 2 == 1):
                    _edges = _edges_down
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

def f(x):
    seq = [0, 1, 2, 2, 1, 0]
    return seq[x % 6]

def print_tri_grid(grid):
    rows = len(grid)
    cols = len(grid[0])
    row = 0
    r_pass = 0

    fill0 = "______"
    fill1 = "\    /"
    fill2 = "/____\\"
    main_l = "\\"
    main_r = "/"
    queue0 = ["\\", '/']
    queue1 = ["/", '\\']

    for _ in range(math.ceil(cols/2)):
        print(fill0, end="")
    print("")

    """
    
        FUCK IT, table works at least. Display is not my job.
    
    """
    for r in range(3*rows):
        print(" " * f(r), end="")
        if r_pass == 0:
            if f(r) == 0:
                for _ in range(math.ceil(cols/2)):
                    print(fill1, end="")
                print("\\", end="")

                print("\n", end="")
                continue
            if f(r) == 1:
                temp_queue = queue0.copy()
                for id, e in enumerate(grid[row]):
                    infill = (" " * (2 - len(str(e)))) + str(e)
                    print(temp_queue[0], end="")
                    print(infill, end="")
                    temp_queue.append(temp_queue.pop(0))
                print(temp_queue[0], end="")
                row += 1
                
                print("\n", end="")
                continue
            if f(r) == 2:
                print(main_l, end="")
                for _ in range(math.ceil(cols/2)):
                    print(fill2, end="")
                r_pass = 1
                
                print("\n", end="")
                continue
        else:
            if f(r) == 2:
                print("/", end="")
                for _ in range(math.ceil(cols/2)):
                    print(fill1, end="")
                
                print("\n", end="")
                continue
            if f(r) == 1:
                temp_queue = queue1.copy()
                for id, e in enumerate(grid[row]):
                    infill = (" " * (2 - len(str(e)))) + str(e)
                    print(temp_queue[0], end="")
                    print(infill, end="")
                    temp_queue.append(temp_queue.pop(0))
                print(temp_queue[0], end="")
                row += 1
                
                print("\n", end="")
                continue
            if f(r) == 0:
                for _ in range(math.ceil(cols/2)):
                    print(fill2, end="")
                print(main_r, end="")
                r_pass = 0
                
                print("\n", end="")
                continue
        # if r_pass == 1:
        #     print("\\", end="")
        # if r_pass == 2:
        #     r_pass = 0
        #     row += 1
        # for id, e in enumerate(grid[row]):
        #     if id%2 == r_pass: print(main_left + e + main_right, end="")
        #     else: print(fill2, end="")
        
        # if r_pass == 1: print("/")
        # else: print("")
        # r_pass += 1

    # print(" ", end="")
    # for _ in range(int(cols/2)):
    #     print(fill1, end="")
    # print("")

if __name__ == '__main__':
    board = get_board(9, 4)
    board = populate(board, 3)
    print_table(board)
    print_tri_grid(board)
