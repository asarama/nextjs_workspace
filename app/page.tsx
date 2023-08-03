import { TodoItem } from '@/components/TodoItem'
import { prisma } from '@/db'
import Link from 'next/link'

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: {id}, data: {complete}})
}

export default async function Home() {

  // await createTestTodo()
  const todos =  await prisma.todo.findMany()

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1>Hi</h1>
        <div className='flex justify-end gap-1'>
          <Link href="/new" className="border boarder-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100">Add</Link>
          <Link href="/new/123" className="border boarder-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100">New page</Link>
        </div>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}></TodoItem>
        ))}
      </ul>
    </>
  )
}
