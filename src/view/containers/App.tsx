import React from 'react';

import TaskBoard from '../containers/task-board';

import { ChosenTaskInfoProvider } from '../contexts/task-context';

function App() {
    return (
        <ChosenTaskInfoProvider>
            <TaskBoard />
        </ChosenTaskInfoProvider>
    );
}

export default App;
