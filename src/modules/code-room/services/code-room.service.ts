import { Item, ItemModel } from "../models/code-room.model";

export class CodeRoomService {
  private items: Item[] = [];

  async getAllItems(): Promise<Item[]> {
    return await ItemModel.find();
  }

  async createItem(itemData: Item): Promise<Item> {
    const test = {
        "name": "name",
        "description": "description"
    }
    const item = new ItemModel(test);
    console.log(item);
    try {
        await item.save();
    } catch (error) {
        console.log(error)
    }
    return await item.save();
  }
}
