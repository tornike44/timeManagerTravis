defmodule TimeManagerWeb.WorkingtimeController do
  use TimeManagerWeb, :controller

  alias TimeManager.Workingtimes
  alias TimeManager.Workingtimes.Workingtime

  action_fallback TimeManagerWeb.FallbackController

  def get_all(conn, _params) do
    workingtimes = Workingtimes.list_all_workingtimes()
    render(conn, "index.json", workingtimes: workingtimes)
  end

  def index(conn, %{"user" => workingtime_params}) do
    workingtimes = Workingtimes.list_workingtimes(workingtime_params)
    render(conn, "index.json", workingtimes: workingtimes)
  end

  def create(conn, %{"user" => user, "workingtime" => workingtime_params}) do
    workingtime_params = Map.merge(workingtime_params, %{"user" => user})
    with {:ok, %Workingtime{} = workingtime} <- Workingtimes.create_workingtime(workingtime_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.workingtime_path(conn, :show, workingtime))
      |> render("show.json", workingtime: workingtime)
    end
  end

  def show_by_user(conn, %{"user" => user, "id" => id}) do
    workingtime = Workingtimes.get_workingtime_by_user!(user, id)
    render(conn, "show.json", workingtime: workingtime)
  end

  def show(conn, %{"id" => id}) do
    workingtime = Workingtimes.get_workingtime!(id)
    render(conn, "show.json", workingtime: workingtime)
  end

  def update(conn, %{"id" => id, "workingtime" => workingtime_params}) do
    workingtime = Workingtimes.get_workingtime!(id)

    with {:ok, %Workingtime{} = workingtime} <- Workingtimes.update_workingtime(workingtime, workingtime_params) do
      render(conn, "show.json", workingtime: workingtime)
    end
  end

  def delete(conn, %{"id" => id}) do
    workingtime = Workingtimes.get_workingtime!(id)

    with {:ok, %Workingtime{}} <- Workingtimes.delete_workingtime(workingtime) do
      send_resp(conn, :no_content, "")
    end
  end
end
