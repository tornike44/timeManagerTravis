#!/bin/bash

mix local.hex --force
mix local.rebar --force
mix deps.get --force
mix ecto.create
mix ecto.migrate
mix phx.server