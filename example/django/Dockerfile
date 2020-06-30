FROM python:3.7-slim
LABEL maintainer="team@synaptic.cl"

WORKDIR /code/
COPY . .
RUN pip install -r /code/requirements.txt
RUN python -m manage migrate
