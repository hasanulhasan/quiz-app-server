import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertToDB = async (req: Request, res: Response)=> {
  try {
    const result = await UserService.insertIntoDB(req.body)
    res.send({
      success: true,
      message: 'User Created Successfully',
      data: result
    })
    
  } catch (error) {
    res.send(error)
  }
}

const getAllUsers =async (req:Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      success: true,
      message: 'All User',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const getSingleUser =async (req:Request, res: Response) => {
  try {
    const result = await UserService.getUser(Number(req.params.id));
    res.send({
      success: true,
      message: 'Single User fetched',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}

const updateSingleUser =async (req:Request, res: Response) => {
  const id = Number(req.params.id)
  const payload = req.body
  try {
    const result = await UserService.updateUser(id, payload);
    res.send({
      success: true,
      message: 'Single User fetched',
      data: result
    })
  } catch (error) {
    res.send(error)
  }
}


export const UserController = {
  insertToDB,getAllUsers,getSingleUser,updateSingleUser
}
