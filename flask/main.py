from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from random import randint

class Sapper:
    def __init__(self):
        self.TYPES = ['tri', 'sq', 'hex']
        self.EDGES = {
            "sq": [(-1, -1), (0, -1), (1, -1), (1, 0), (1, 1), (0, 1), (-1, 1), (-1, 0)],
            "hex": [(-1, -1), (0, -1), (1, -1), (1, 0), (0, 1), (-1, 0)],
            #tri == tri_up
            "tri": [(-1,-1), (-1,0), (-1,1), (0,-2), (0,-1), (0,1), (0,2), (1,-2), (1,-1), (1,0), (1,1), (1,2)],
            "tri_down": [(-1,-2), (-1,-1), (-1,0), (-1,1), (-1,2), (0,-2), (0,-1), (0,1), (0,2), (1,-1), (1,0), (1,1)]
        }

    def init(self, x:int, y:int, bombs:int):
        self.x = x
        self.y = y
        self.bombs = bombs

    def data(self):
         return [self.x, self.y, self.bombs]
    
    def set_type(self, type):
        if type in self.TYPES:
            self.type = type
        elif type in range(3):
            self.type = self.TYPES[type]
        else:
            raise Exception("Unknown type. Allowed types: 0 [tri]angle, 1 [sq]uare, 2 [hex]agonal") 

    def init_board(self):
        self.board = [ [None]*self.x for _ in range(self.y) ]
        self.rows = len(self.board)
        self.cols  = len(self.board[0])

    def populate(self):
        bomb_list = [(randint(0, self.rows-1), randint(0, self.cols-1)) for _ in range(self.bombs)]
        for coord in bomb_list:
            self.board[coord[0]][coord[1]] = '#'
    
    def count(self):
        _edges = self.EDGES[self.type]
        #triangle start up

        for i in range(self.rows):
            for j in range(self.cols):
                if self.board[i][j] != '#':
                    count = 0

                    if self.type == "tri":
                        if (i % 2 == 0 and j % 2 == 0) or (i % 2 == 1 and j % 2 == 1):
                            _edges = self.EDGES["tri_down"]
                    
                    for (k, l) in _edges:
                        k = i + k
                        l = j + l
                        if k in range(0, self.rows) and l in range(0, self.cols):
                            if self.board[k][l] == '#':
                                count += 1

                    if count == 0:
                        count = " "
                    self.board[i][j] = str(count)

    def play(self, type):
        self.init_board()
        self.set_type(type)
        self.populate()
        self.count()

        return self.board

class Game(Resource):
    def post(self, x_len, y_len, bomb_amount):
        print(x_len, y_len, bomb_amount)
        game.init(x_len, y_len, bomb_amount)
        return {'data' : game.data()}
    
class Play(Resource):
    def get(self, typ):
        print(typ)
        if game == None:
            abort(404, message="Please initialize first via Game.")
        result = game.play(typ)
        return {'data' : result}

#------------------------------------------------------------------------------------------------------------------#
#------------------------------------------------------------------------------------------------------------------#
#------------------------------------------------------------------------------------------------------------------#

app = Flask(__name__)
api = Api(app)
game = Sapper()

api.add_resource(Game, "/game/<int:x_len>/<int:y_len>/<int:bomb_amount>")
api.add_resource(Play, "/play/<string:typ>")

if __name__ == "__main__":
	app.run(debug=True)