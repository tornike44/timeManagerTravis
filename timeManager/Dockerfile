FROM elixir:latest

RUN apt update && apt install -y postgresql-client

COPY . /app
WORKDIR /app

RUN chmod +x entrypoint.sh

EXPOSE 4000

ENTRYPOINT ["/app/entrypoint.sh"]