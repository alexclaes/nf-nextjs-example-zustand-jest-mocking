import Message from "../model/messageModel";
import dbConnect from "../database/dbConnect";

export async function addMessage(author, content) {
  await dbConnect();

  const newMessage = await Message.create({
    author,
    content,
  });

  return newMessage;
}
