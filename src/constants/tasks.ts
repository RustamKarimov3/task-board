import { TaskInfo, TaskImportanceCoefficient, TaskStatus } from "../types/tasks";

export const TaskStatusDictionary: Record<TaskStatus, string> = {
    plan: 'PLANNED',
    inProgress: 'IN PROGRESS',
    testing: 'TESTING',
    done: 'DONE',
} as const;

export const TaskStatuses: Record<TaskStatus, TaskStatus> = {
    plan: 'plan',
    inProgress: 'inProgress',
    testing: 'testing',
    done: 'done',
} as const;

export const TASKS: Array<TaskInfo> = [
    {
        id: '1',
        taskName: 'Важная задача',
        assignee: {
            id: 'id1',
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatuses.plan,
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
        status: TaskStatuses.plan,
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
        status: TaskStatuses.plan,
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
        status: TaskStatuses.done,
        importance: TaskImportanceCoefficient.Must,
    }
];
