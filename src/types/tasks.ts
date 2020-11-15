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

export type Task = {
    id: string;
    taskName: string;
    employee: {
        firstName: string;
        lastName: string;
    }
    status: TaskStatus;
    importance: TaskImportanceCoefficient;
}