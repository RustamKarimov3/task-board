export enum TaskStatus {
    Plan = 'PLAN',
    In_progress = 'IN_PROGRESS',
    Testing = 'TESTING',
    Done = 'DONE',
}

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