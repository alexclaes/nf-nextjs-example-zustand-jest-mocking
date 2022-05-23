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

  it("should show a success message after adding a todo", async () => {
    render(<Todos />);

    const todoInput = screen.getByLabelText(/todo:/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(todoInput, "another task");
    await userEvent.click(submitButton);

    const successMessage = screen.getByText(/todo was added/i);
    expect(successMessage).toBeInTheDocument();
  });

  it("should reset the input field after adding a todo", async () => {
    render(<Todos />);

    const todoInput = screen.getByLabelText(/todo:/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(todoInput, "another task");
    await userEvent.click(submitButton);

    expect(todoInput.value).toBe("");
  });

  it("should call a given submit handler", async () => {
    const submitFunction = jest.fn();

    render(<Todos onSubmit={submitFunction} />);

    const todoInput = screen.getByLabelText(/todo:/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(todoInput, "another task");
    await userEvent.click(submitButton);

    expect(submitFunction).toHaveBeenCalledTimes(1);
    expect(submitFunction).toHaveBeenCalledWith("another task");
  });

  it("should not submit when the input field is empty", async () => {
    const { container } = render(<Todos />);

    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.click(submitButton);

    const successMessage = screen.queryByText(/todo was added/i);
    expect(successMessage).not.toBeInTheDocument();

    const invalidInput = container.querySelector("input:invalid");
    expect(invalidInput).toBeInTheDocument();
  });
});
