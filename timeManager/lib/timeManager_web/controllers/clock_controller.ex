defmodule TimeManagerWeb.ClockController do
  use TimeManagerWeb, :controller

  alias TimeManager.Clocks
  alias TimeManager.Clocks.Clock
  alias TimeManager.Workingtimes
  require Logger
  action_fallback TimeManagerWeb.FallbackController

  def index(conn, %{"user" => clock_params }) do
    clocks = Clocks.list_clocks(clock_params)
    render(conn, "index.json", clocks: clocks)
  end

  def create(conn, %{"user" => user}) do
    current_dt = DateTime.utc_now()
    current_dt = DateTime.to_naive(current_dt)
    # Initialisation de la clock
    clock_params = Map.new()
    clock_params = Map.merge(clock_params, %{"time" => current_dt, "status" => true, "user" => user})
    Logger.info(clock_params)
    clock = Clocks.get_clock_by_user_id!(user)
    #  Si la clock existe déjà pour cet utilisateur
    if clock do
      clock_status = Map.get(clock, :status)
      if clock_status do
        # Si le status est true, alors il faut clock out et créer un workingtime avec l'ancien temps de la clock et le nouveau (fin d'une période de travail et création du temps de travail)
        # On set le workingtime
        start_dt = Map.get(clock, :time)
        workingtime_params = %{"start" => start_dt, "end" => current_dt, "user" => user}

        # On met à jour la clock
        clock_params = Map.merge(clock_params, %{"status" => false})

        # On envoie les données en DB
        Clocks.update_clock(clock, clock_params)
        Workingtimes.create_workingtime(workingtime_params)
        clock = Clocks.get_clock_by_user_id!(user)
        Logger.info(workingtime_params)
        render(conn, "show.json", clock: clock)

      else
        # Sinon on clock in
        Clocks.update_clock(clock, clock_params)
        clock = Clocks.get_clock_by_user_id!(user)
        render(conn, "show.json", clock: clock)
      end
    else
      # Sinon on la crée pour l'utilisateur
      with {:ok, %Clock{} = clock} <- Clocks.create_clock(clock_params) do
        conn
        |> put_status(:created)
        |> render("show.json", clock: clock)
      end
    end
  end

  def show(conn, %{"id" => id}) do
    clock = Clocks.get_clock(id)
    render(conn, "show.json", clock: clock)
  end

  def update(conn, %{"id" => id, "clock" => clock_params}) do
    clock = Clocks.get_clock!(id)

    with {:ok, %Clock{} = clock} <- Clocks.update_clock(clock, clock_params) do
      render(conn, "show.json", clock: clock)
    end
  end

  def delete(conn, %{"id" => id}) do
    clock = Clocks.get_clock!(id)

    with {:ok, %Clock{}} <- Clocks.delete_clock(clock) do
      send_resp(conn, :no_content, "")
    end
  end
end
