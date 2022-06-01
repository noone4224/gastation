from flask import Flask, jsonify, request
from bson.json_util import dumps
import json
import pymongo

app = Flask(__name__)

# Replace the uri string with your MongoDB deployment's connection string.
conn_str = "mongodb+srv://nayra1316:rafa123@cluster0.iqyprre.mongodb.net/?retryWrites=true&w=majority"

# set a 5-second connection timeout
client = pymongo.MongoClient(conn_str)
myDB = client["Clients"]
myCollection = myDB["clients"]
lista = list(myCollection.find({}))

count = 0
with open('collection.json', 'w') as file:
        file.write('{ "clients" : [')
        for document in lista:
            count+=1
            file.write(dumps(document))
            if count == len(lista):
                  break;
            else:
              file.write(',')
        file.write(']}')

@app.route("/clients")

def clients():
  x = open('collection.json')
  data = json.load(x)
  return data


@app.route("/sendNotif", methods = ["POST"])

def sendNotif():
      print(request.json)
      return 'received'

if __name__ == "__main__":
    app.run(debug=True)
