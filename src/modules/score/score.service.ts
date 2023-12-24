import { PrismaClient, Score } from "@prisma/client";

const prisma = new PrismaClient();

const insertToDB = async (data: Score): Promise<Score> => {
  const result = await prisma.score.create({data})
  return result
}

const getAllScore = async () => {
  const result = await prisma.score.findMany()
  return result
}

const getSingleScore = async (id: number) => {
  const result = await prisma.score.findUnique({
    where: {
      id
    }
  })
  return result
}

export const ScoreService = {
  insertToDB, getAllScore, getSingleScore
}