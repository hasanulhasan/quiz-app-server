import { PrismaClient, Topic } from "@prisma/client";
const prisma = new PrismaClient();

const insertToDB = async (data: Topic): Promise<Topic> => {
  const result = await prisma.topic.create({data})
  return result
}

const getAllTopic = async () => {
  const result = await prisma.topic.findMany()
  return result
}

const getSingleTopic = async (id: number) => {
  const result = await prisma.topic.findUnique({
    where: {
      id
    },
  })
  return result
}

export const TopicService = {
  insertToDB, getAllTopic, getSingleTopic
}