import { Task, TaskImportanceCoefficient, TaskStatus } from "../types/tasks";


export const TASKS: Array<Task> = [
    {
        id: '1',
        taskName: 'Рефакторинг',
        employee: {
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatus.Plan,
        importance: TaskImportanceCoefficient.Must,
    },
    {
        id: '2',
        taskName: 'Рефакторинг',
        employee: {
            firstName: 'Петя',
            lastName: 'Камушкин'
        },
        status: TaskStatus.Plan,
        importance: TaskImportanceCoefficient.Must,
    }
];