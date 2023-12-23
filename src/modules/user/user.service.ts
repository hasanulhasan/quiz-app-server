import { PrismaClient, User } from "@prisma/client"
const prisma = new PrismaClient();

const insertIntoDB = async(data: User): Promise<User> => {
  const result = await prisma.user.create({data})
  return result
}

const getUsers = async () => {
  const result = await prisma.user.findMany()
  return result
}

const getUser = async(id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id
    },
  })
  return result;
}

export const UserService = { insertIntoDB, getUsers, getUser }