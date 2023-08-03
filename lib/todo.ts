import { prisma } from '@/db'

export async function createTestTodo(title: string) {
    "use server"
    await prisma.todo.create({data: {title}})
}