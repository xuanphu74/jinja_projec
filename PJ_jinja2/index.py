from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
    

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/user/')
def show_user():
    return render_template("user.html")
@app.route('/profile/')
def show_profile():
    return render_template("profile.html")
@app.route('/setting/')
def setting():
    return render_template("setting.html")

if __name__ == '__main__':
    app.run(debug=True)
