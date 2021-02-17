# Glide interview exercise 2021

## Back-end

How to install and run it:
```
$ python3 -m venv venv
$ source venv/bin/activate
$ pip3 install -r requirements.txt
$ FLASK_ENV=development ./venv/bin/flask run
```
Alternatively, just do `run.sh`

To test:
```
$ curl http://127.0.0.1:5000/autocomplete\?needle\="test"
{
  "error": "Server error. Not implemented"
}
```
When properly implemented:
```
$ curl http://127.0.0.1:5000/autocomplete\?needle="at"
{
  "needle": "at",
  "results": [
    [
      4,
      "Renata",
      "Brown",
      "Designer"
    ],
    [
      7,
      "Matias",
      "Davis",
      "Full-stack engineer"
    ]
  ]
}
```

## Front-end

How to install and run it:
```
$ cd frontend
$ yarn install
$ yarn start
```

