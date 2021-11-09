defmodule TimeManager.WorkingtimesFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `TimeManager.Workingtimes` context.
  """

  @doc """
  Generate a workingtime.
  """
  def workingtime_fixture(attrs \\ %{}) do
    {:ok, workingtime} =
      attrs
      |> Enum.into(%{
        start: ~N[2021-10-25 08:41:00]
      })
      |> TimeManager.Workingtimes.create_workingtime()

    workingtime
  end

  @doc """
  Generate a workingtime.
  """
  def workingtime_fixture(attrs \\ %{}) do
    {:ok, workingtime} =
      attrs
      |> Enum.into(%{
        end: ~N[2021-10-25 08:51:00],
        start: ~N[2021-10-25 08:51:00]
      })
      |> TimeManager.Workingtimes.create_workingtime()

    workingtime
  end
end
