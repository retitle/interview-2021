from flask import Flask
from flask import request
from autocomplete import AutocompleteService

app = Flask(__name__)


# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
    return 'Hello World'


# Returning a dict from a route will make Flask automatically
# convert it into a json
@app.route('/ping')
def ping():
    # request.args is a dictionary containing query parameters
    # in a GET request
    query = request.args.get('query', '')

    # Returning an error is as easy as passing the desired http
    # error code as the second element of the response tuple
    if not query:
        return {
            'error': 'Query is required'
        }, 400

    return {
        'pong': True,
        'query': query
    }


@app.route('/autocomplete')
def auto_complete_users():
    needle = request.args.get('needle', '')
    results, err_code, err_message = AutocompleteService().auto_complete_users(
        needle
    )

    if err_code is not None:
        return {
            'error': err_message
        }, err_code

    return {
        'needle': needle,
        'results': results
    }


# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
