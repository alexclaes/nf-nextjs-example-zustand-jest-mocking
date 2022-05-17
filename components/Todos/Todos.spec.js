import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todos from "./Todos";

describe("Todos", () => {
  it("should render the todos", () => {
    render(<Todos />);

    const task1 = screen.getByText(/first task/i);
    const task2 = screen.getByText(/second task/i);
    const task3 = screen.getByText(/third task/i);

    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
    expect(task3).toBeInTheDocument();
  });

  it("should add a todo", async () => {
    render(<Todos />);

    const todoInput = screen.getByLabelText(/todo:/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(todoInput, "another task");
    await userEvent.click(submitButton);

    const additionalTask = screen.getByText(/another task/i);
    expect(additionalTask).toBeInTheDocument();
  });

  // it("renders the todos after addition", () => {
  //   render(<Todos />);
  //   screen.debug();

  //   const task4 = screen.getByText(/another task/i);
  //   expect(task4).toBeInTheDocument();
  // });
});
