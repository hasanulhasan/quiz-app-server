import { Request, Response } from "express";
import { ScoreService } from "./score.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await ScoreService.insertToDB(req.body)
    res.send({
      success: true,
      message: 'New Score Created',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getScores =async (req: Request, res: Response) => {
  try {
    const result = await ScoreService.getAllScore();
    res.send({
      success: true,
      message: 'All Score',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getScore =async (req: Request, res: Response) => {
  try {
    const result = await ScoreService.getSingleScore(Number(req.params.id));
    res.send({
      success: true,
      message: 'Single Score',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const deleteScore =async (req: Request, res: Response) => {
  try {
    const result = await ScoreService.deleteSingleScore(Number(req.params.id));
    res.send({
      success: true,
      message: 'Score Deleted',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

export const ScoreController = {
  insertIntoDB, getScores, getScore, deleteScore
}