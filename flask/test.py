import requests

BASE = "http://127.0.0.1:5000/"

response = requests.post(BASE + "game/4/8/10")
print(response.json())
print(requests.get(BASE + "play/tri").json()['data'])
print(requests.get(BASE + "play/sq").json()['data'])
print(requests.get(BASE + "play/hex").json()['data'])
print(requests.get(BASE + "play/tri").json()['data'])
