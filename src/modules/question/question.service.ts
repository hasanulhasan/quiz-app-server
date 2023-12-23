import { PrismaClient, Question } from "@prisma/client";
const prisma = new PrismaClient();

const insertToDB = async (data: Question): Promise<Question> => {
  const result = await prisma.question.create({data})
  return result
}

const getQuestions = async () => {
  const result = await prisma.question.findMany()
  return result  
}

const getQuestion = async (id: number) => {
  const result = await prisma.question.findUnique({
    where: {
      id
    },
    include: {
      topic: true
    }
})
  return result  
}


export const QuestionService = { insertToDB, getQuestions, getQuestion }