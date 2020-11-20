import {
    TaskInfo,
    TaskImportanceCoefficient,
    TaskStatus,
} from "../types/tasks";

export const TaskStatusTitles: Record<TaskStatus, string> = {
    plan: "PLANNED",
    inProgress: "IN PROGRESS",
    testing: "TESTING",
    done: "DONE",
};

export const TaskStatuses: Record<TaskStatus, TaskStatus> = {
    plan: "plan",
    inProgress: "inProgress",
    testing: "testing",
    done: "done",
};

export const TaskImportanceNameByCoefficient: Record<
    TaskImportanceCoefficient,
    string
> = {
    [TaskImportanceCoefficient.Must]: "high",
    [TaskImportanceCoefficient.Should]: "middle",
    [TaskImportanceCoefficient.Could]: "low",
};

export const TASKS: Array<TaskInfo> = [
    {
        id: "TSK-001",
        taskName: "Cоздать приложение",
        assignee: {
            id: "id1",
            firstName: "Вася",
            lastName: "Пупкин",
        },
        status: TaskStatuses.plan,
        importance: TaskImportanceCoefficient.Must,
        date: new Date(),
    },
    {
        id: "TSK-002",
        taskName: "Придумать дизайн",
        assignee: {
            id: "id1",
            firstName: "Вася",
            lastName: "Пупкин",
        },
        status: TaskStatuses.plan,
        importance: TaskImportanceCoefficient.Should,
        date: new Date(),
    },
    {
        id: "TSK-003",
        taskName: "Затащить react-dnd",
        assignee: {
            id: "id1",
            firstName: "Вася",
            lastName: "Пупкин",
        },
        status: TaskStatuses.plan,
        importance: TaskImportanceCoefficient.Could,
        date: new Date(),
    },
    {
        id: "TSK-004",
        taskName: "Порефачить reducer-ы",
        assignee: {
            id: "id2",
            firstName: "Петя",
            lastName: "Камушкин",
        },
        status: TaskStatuses.inProgress,
        importance: TaskImportanceCoefficient.Must,
        date: new Date(),
    },
    {
        id: "TSK-005",
        taskName: "Порефачить reducer-ы",
        assignee: {
            id: "id2",
            firstName: "Петя",
            lastName: "Камушкин",
        },
        status: TaskStatuses.plan,
        importance: TaskImportanceCoefficient.Must,
        date: new Date(),
    },
    {
        id: "TSK-006",
        taskName: "Порефачить reducer-ы",
        assignee: {
            id: "id2",
            firstName: "Олег",
            lastName: "Канавин",
        },
        status: TaskStatuses.inProgress,
        importance: TaskImportanceCoefficient.Should,
        date: new Date(),
    },
    {
        id: "TSK-007",
        taskName: "Узнать что-то",
        assignee: {
            id: "id2",
            firstName: "Петя",
            lastName: "Камушкин",
        },
        status: TaskStatuses.testing,
        importance: TaskImportanceCoefficient.Could,
        date: new Date(),
    },
    {
        id: "TSK-008",
        taskName: "Погулять",
        assignee: {
            id: "id3",
            firstName: "Олег",
            lastName: "Канавин",
        },
        status: TaskStatuses.plan,
        importance: TaskImportanceCoefficient.Must,
        date: new Date(),
    },
    {
        id: "TSK-009",
        taskName: "Узнать что-то",
        assignee: {
            id: "id3",
            firstName: "Олег",
            lastName: "Канавин",
        },
        status: TaskStatuses.testing,
        importance: TaskImportanceCoefficient.Could,
        date: new Date(),
    },
    {
        id: "TSK-010",
        taskName: "Потанцевать с бубном",
        assignee: {
            id: "id4",
            firstName: "Андрей",
            lastName: "Туннелин",
        },
        status: TaskStatuses.done,
        importance: TaskImportanceCoefficient.Could,
        date: new Date(),
    },
    {
        id: "TSK-011",
        taskName: "Сделать что-то невероятное",
        assignee: {
            id: "id4",
            firstName: "Андрей",
            lastName: "Туннелин",
        },
        status: TaskStatuses.plan,
        importance: TaskImportanceCoefficient.Must,
        date: new Date(),
    },
    {
        id: "TSK-012",
        taskName: "Узнать что-то",
        assignee: {
            id: "id4",
            firstName: "Андрей",
            lastName: "Туннелин",
        },
        status: TaskStatuses.inProgress,
        importance: TaskImportanceCoefficient.Should,
        date: new Date(),
    },
];
