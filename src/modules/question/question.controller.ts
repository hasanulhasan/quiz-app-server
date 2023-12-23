import { Request, Response } from "express";
import { QuestionService } from "./question.service";

const insertIntoDB =async (req: Request, res: Response) => {
  try {
    const result = await QuestionService.insertToDB(req.body)
    res.send({
      success: true,
      message: 'Questions Created Successfully',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getAllQuestions = async (req: Request, res: Response)=> {
  try {
    const result = await QuestionService.getQuestions();
    res.send({
      success: true,
      message: 'All Questions Fetched',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getSingleQuestion = async (req: Request, res: Response)=> {
  try {
    const result = await QuestionService.getQuestion(Number(req.params.id));
    res.send({
      success: true,
      message: 'Single Question Fetched',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

export const QuestionController = {
  insertIntoDB, getAllQuestions, getSingleQuestion
}