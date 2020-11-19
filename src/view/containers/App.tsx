import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


import TaskBoard from '../containers/task-board';

function App() {
    return (
        <DndProvider backend={ HTML5Backend }>
            <TaskBoard />
        </DndProvider>
    );
};

export default App;
