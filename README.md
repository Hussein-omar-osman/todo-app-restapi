## TodoApp-RestApi

This is a simple todo api with a restful api built on django-restframework. Users can register, login and logout. Users can add a todo , mark it as done or yet to be done and delete a todo when they are done.

## Author Information

Written by Hussein Omar.

## Installation

Clone the repository
Create a virtual environment
Install Django and other requirements in my requirements.txt file in your repository folder
Run the IP address on the browser

## Endpoints

- Get a single todo: 'https://todo-app-restapi.herokuapp.com/api/get/{id}/' : Method = 'GET'
- Get a single user: 'https://todo-app-restapi.herokuapp.com/api/user/{id}/' : Method = 'GET'
- Get all todos: 'https://todo-app-restapi.herokuapp.com/api/todos/' : Method = 'GET'
- Get all users: 'https://todo-app-restapi.herokuapp.com/api/users/' : Method = 'GET'
- Create a todo: 'https://todo-app-restapi.herokuapp.com/api/create/' : Method = 'POST'
- Update a todo: 'https://todo-app-restapi.herokuapp.com/api/update/{id}/' : Method = 'PUT'
- Delete a todo: 'https://todo-app-restapi.herokuapp.com/api/delete/{id}/' : Method = 'DELETE'

## User Stories

These are the behaviours/features that the application implements for use by a user.

As a user I would like to:

- Can register, login or logout
- Can add a todo
- Can mark a todo done or yet to be done
- Can delete a todo

## Behaviour Driven Development

| Behavior                | Input description  | Output description                                  |
| ----------------------- | ------------------ | --------------------------------------------------- |
| Login, Signup or Logout | Username, Password | User will be either loggedin, registered, loggedout |
| Add or remove todos     | the todo           | The todo will be posted to the feed page            |

## SetUp / Installation Requirements

### Prerequisites

- python3.10.4
- pip
- virtualenv

## Running the Application

- Creating the virtual environment

        $ python3.10.4 -m venv --without-pip env
        $ source env/bin/activate

- Installing Django

        $ python3.10.4 -m pip install Django
        $ python3.10.4 -m pip install djangorestframework
        $ python3.10.4 -m pip install psycopg2

## Technologies Used

- Python3.10.4
- Django
- Bootstrap
- Javascript

Live Link: > https://todo-app-restapi.herokuapp.com/

## Contact Information

To reach me, email me at: > husseinomar6190@gmail.com

License
MIT License

Copyright (c) [2022] [**Hussein Omar**]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
