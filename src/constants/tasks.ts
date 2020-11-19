import { TaskInfo, TaskImportanceCoefficient, TaskStatus } from "../types/tasks";

export const TaskStatusTitles: Record<TaskStatus, string> = {
    plan: 'PLANNED',
    inProgress: 'IN PROGRESS',
    testing: 'TESTING',
    done: 'DONE',
};

export const TaskStatuses: Record<TaskStatus, TaskStatus> = {
    plan: 'plan',
    inProgress: 'inProgress',
    testing: 'testing',
    done: 'done',
};

export const TaskImportanceNameByCoefficient: Record<TaskImportanceCoefficient, string> = {
    [TaskImportanceCoefficient.Must]: 'high',
    [TaskImportanceCoefficient.Should]: 'middle',
    [TaskImportanceCoefficient.Could]: 'low',
};

export const TASKS: Array<TaskInfo> = [
    {
        id: 'TSK-001',
        taskName: 'Cоздать приложение',
        assignee: {
            id: 'id1',
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatuses.plan,
        importance: 0,
    },
    {
        id: 'TSK-002',
        taskName: 'Придумать дизайн',
        assignee: {
            id: 'id1',
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatuses.plan,
        importance: 1,
    },
    {
        id: 'TSK-003',
        taskName: 'Затащить react-dnd',
        assignee: {
            id: 'id1',
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        status: TaskStatuses.plan,
        importance: 2,
    },
    {
        id: 'TSK-004',
        taskName: 'Порефачить reducer-ы',
        assignee: {
            id: 'id2',
            firstName: 'Петя',
            lastName: 'Камушкин'
        },
        status: TaskStatuses.done,
        importance: 0,
    }
];
