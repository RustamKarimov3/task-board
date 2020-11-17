export type TaskStatus = 'plan' | 'inProgress' | 'testing' | 'done';

export enum TaskImportanceCoefficient {
    Could = 0,
    Should = 1,
    Must = 2,
}

export type AssigneeInfo = {
    id: string;
    firstName: string;
    lastName: string;
}

export type TaskInfo = {
    id: string;
    taskName: string;
    assignee: AssigneeInfo;
    status: TaskStatus;
    importance: TaskImportanceCoefficient;
}