import { prisma } from '@/db'
import Link from 'next/link'

const create_test_todo = async () => {
  await prisma.todo.create({data: {title: "test"}})
}

export default async function Home() {

  // await create_test_todo()
  const todos =  await prisma.todo.findMany()

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1>Hi</h1>
        <Link href="/new/123">New page</Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}
