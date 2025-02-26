import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"


//criar um usuario
export const createUser = async (data: Prisma.userCreateInput) => {

  const result = await prisma.user.upsert({
    where: {
      email: data.email // procura pelo o email que mandamos
    },
    update: {
      role: 'ADMIM' // se o usuario com aquele email que mandamos existir, ele faz o updaate
    },
    create: data // se não existir, ele cria um usuario novo
  })
  return result
}

// criar varios usuarios
export const createUsers = async (users: Prisma.userCreateInput[]) => {

  const result = await prisma.user.createMany({
    data: users,
    skipDuplicates: true // esse pula/dispensa os que não são iguais
  })

}

//pegar varios usuarios
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: [
      { name: 'asc' },
      { id: 'asc' }
    ]
  })
  return users
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true
    }
  })
  return user
}

export const updateUser = async () => {
  const updatedUser = await prisma.user.update({
    //o updateMany() é mais generico, por exemplo, quero alterar todos que tem o @gmail.com para ADMIN
    where: { // nunca fazer sem o where
      email: 'edduansbbs@gmail.com'
    },
    data: {
      role: 'ADMIM'
    }
  })
  return updatedUser
}

export const deleteUser = async () => {
  const deletedUser = await prisma.user.delete({

    where: {
      email: 'eduguerra0202@gmail.com'
    }

  })
  return deletedUser
}
