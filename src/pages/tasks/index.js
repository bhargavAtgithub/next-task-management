import Form from "@/components/Form";
import TasksList from "@/components/TasksList";
import { TasksProvider } from "@/context/tasksContext";

export default function Home() {
  return (
    <TasksProvider>
      <main 
        className={`
          flex h-screen flex-col 
          items-center lg:justify-center 
          flex-start 
          p-8 pt-24 lg:p-0
          overflow-hidden
        `}>
        <div className={`
          w-full h-full
          flex flex-col
          items-center justify-start
          lg:flex-row
        `}>
          <Form />
          <TasksList />
        </div>
      </main>
    </TasksProvider>
  )
}
