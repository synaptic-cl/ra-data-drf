#!/bin/bash
source ./.env

if [ $ENV = "production" ] || [ $ENV = "beta" ]; then
  gunicorn -c gunicorn_conf.ini app.wsgi:application
fi

if [ $ENV = "dev" ]; then
  python manage.py runserver 0.0.0.0:8000
fi