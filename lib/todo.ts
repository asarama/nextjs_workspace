import { prisma } from '@/db'

export const createTestTodo = async (title: string) => {
    "use server"
    await prisma.todo.create({data: {title}})
}