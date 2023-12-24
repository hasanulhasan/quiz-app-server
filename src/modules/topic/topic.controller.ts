import { Request, Response } from "express";
import { TopicService } from "./topic.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await TopicService.insertToDB(req.body)
    res.send({
      success: true,
      message: 'New Topic Created',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getTopics =async (req: Request, res: Response) => {
  try {
    const result = await TopicService.getAllTopic();
    res.send({
      success: true,
      message: 'All Topic',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getTopic =async (req: Request, res: Response) => {
  try {
    const result = await TopicService.getSingleTopic(Number(req.params.id));
    res.send({
      success: true,
      message: 'Single Topic',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const updateTopic =async (req:Request, res: Response) => {
  const id = Number(req.params.id)
  const payload = req.body
  try {
    const result = await TopicService.updateSingleTopic(id, payload);
    res.send({
      success: true,
      message: 'Topic Updated',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

export const TopicController = {
  insertIntoDB, getTopics, getTopic, updateTopic
}