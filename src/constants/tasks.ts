import { TaskInfo, TaskImportanceCoefficient, TaskStatus } from "../types/tasks";


export const TASKS: Array<TaskInfo> = [
    {
        id: '1',
        taskName: 'Важная задача',
        assignee: {
            id: 'id1',
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatus.Plan,
        importance: TaskImportanceCoefficient.Must,
    },
    {
        id: '2',
        taskName: 'Не очень важная задача',
        assignee: {
            id: 'id1',
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatus.Plan,
        importance: TaskImportanceCoefficient.Should,
    },
    {
        id: '3',
        taskName: 'Неважная задача',
        assignee: {
            id: 'id1',
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatus.Plan,
        importance: TaskImportanceCoefficient.Could,
    },
    {
        id: '4',
        taskName: 'Рефакторинг',
        assignee: {
            id: 'id2',
            firstName: 'Петя',
            lastName: 'Камушкин'
        },
        status: TaskStatus.Done,
        importance: TaskImportanceCoefficient.Must,
    }
];