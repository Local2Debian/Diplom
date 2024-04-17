import datetime
import os
import re
import sqlalchemy.exc
from flask import Flask, make_response, send_file
from flask import render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__,
    static_folder='static/dist/assets',
    template_folder='static/dist',
)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///map.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Recom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    Sentiment_rating = db.Column(db.String(100), nullable=False)
    avg_Ves = db.Column(db.Float, nullable=False)
    ratio = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<  name {self.name}>  < Sentiment_rating {self.Sentiment_rating}> ratio < {self.avg_Ves}>'


@app.route('/')

def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(port=3000, host='0.0.0.0')
