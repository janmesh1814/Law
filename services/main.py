from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/legalhelp', methods=['GET', 'POST'])
def legal_help():
    if request.method == 'GET':
        return jsonify({"message": "Welcome to Legal Help. Please submit your request."})
    elif request.method == 'POST':
        data = request.get_json()
        # Process the data as needed
        return jsonify({"message": "Your request has been received.", "data": data})

if __name__ == '__main__':
    app.run(debug=True)
