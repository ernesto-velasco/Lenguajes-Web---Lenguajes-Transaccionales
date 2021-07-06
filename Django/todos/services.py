import requests

def generate_request(url, params={}):
    response = requests.get(url, params=params)

    if response.status_code == 200:
        return response.json()

def get_todos(params={}):
    response = generate_request('https://jsonplaceholder.typicode.com/todos', params)
    if response:
       return response

    return ''