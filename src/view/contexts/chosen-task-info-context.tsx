import React, { useState } from 'react';

import { TaskInfo } from '../../types/tasks';


/*
    Выбор задачи сделан через контекст, чтобы не гонять весь redux flow для записи в него данных о выбранном продукте.
    Таким образом избавляюсь от клонирования массива задач при изменении стора.
    Еще мне показалось не самым лучшим решением - очищать поле chosenTaskInfo в сторе при нажатии на крестик плашки с подробным описанием. Но может это и норм.

    Нужно подумать о минусах текущего подхода.
*/

const ChosenTaskInfoContext = React.createContext<
{ chosenTaskInfo: TaskInfo, setChosenTaskInfo: (taskInfo: TaskInfo) => any }
>({
    chosenTaskInfo: null,
    setChosenTaskInfo: null,
});

const ChosenTaskInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [chosenTaskInfo, setChosenTaskInfo] = useState<TaskInfo>(null);

    return (
        <ChosenTaskInfoContext.Provider value={{ chosenTaskInfo, setChosenTaskInfo }}>
            { children }
        </ChosenTaskInfoContext.Provider>
    );
  }

export { ChosenTaskInfoProvider, ChosenTaskInfoContext };