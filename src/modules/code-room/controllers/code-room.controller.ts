import { Request, Response } from "express";
import { CodeRoomService } from "../services/code-room.service";
import { Item } from "../models/code-room.model";

export class CodeRoomController {
  private moduleAService = new CodeRoomService();

  getAll = async (req: Request, res: Response) => {
    try {
      const items = await this.moduleAService.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve items" });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const itemData: Item = req.body;
      const createdItem = await this.moduleAService.createItem(itemData);
      console.log('11111111111111111111111')
      res.status(201).json(createdItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to create item" });
    }
  };
}
