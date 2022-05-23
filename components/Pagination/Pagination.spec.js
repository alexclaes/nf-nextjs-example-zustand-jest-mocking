import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("should step forwand the pages", async () => {
    render(<Pagination />);

    // step 1

    const headline0 = screen.getByText(/step 1/i);
    expect(headline0).toBeInTheDocument();

    const prevButton0 = screen.queryByRole("button", { name: /prev/i });
    expect(prevButton0).toBeNull();

    const nextButton0 = screen.getByRole("button", { name: /next/i });
    expect(nextButton0).toBeInTheDocument();

    await userEvent.click(nextButton0);

    // step 2
    const headline1 = screen.getByText(/step 2/i);
    expect(headline1).toBeInTheDocument();

    const prevButton1 = screen.getByRole("button", { name: /prev/i });
    expect(prevButton1).toBeInTheDocument();

    const nextButton1 = screen.getByRole("button", { name: /next/i });
    expect(nextButton1).toBeInTheDocument();

    await userEvent.click(nextButton1);

    // step 3

    const headline2 = screen.getByText(/step 3/i);
    expect(headline2).toBeInTheDocument();

    const prevButton2 = screen.getByRole("button", { name: /prev/i });
    expect(prevButton2).toBeInTheDocument();

    const nextButton2 = screen.queryByRole("button", { name: /next/i });
    expect(nextButton2).toBeNull();

    await userEvent.click(prevButton2);

    // step 2 again
    const headline3 = screen.getByText(/step 2/i);
    expect(headline3).toBeInTheDocument();
  });
});
