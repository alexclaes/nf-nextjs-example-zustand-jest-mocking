import { addMessage } from "./messageService";
import dbConnect from "../database/dbConnect";
import Message from "../model/messageModel";

jest.mock("../database/dbConnect");
jest.mock("../model/messageModel");

describe("messageService", () => {
  it("should add a new message", async () => {
    const author = "john doe";
    const content = "lorem ipsum";

    await addMessage(author, content);

    expect(dbConnect).toHaveBeenCalledTimes(1);

    expect(Message.create).toHaveBeenCalledTimes(1);
    expect(Message.create).toHaveBeenCalledWith({ author, content });
  });
});
