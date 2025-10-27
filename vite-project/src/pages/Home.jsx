import React from 'react';
import TaskManager from '../components/TaskManager';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Task Manager</h1>
      <TaskManager />
    </div>
  );
}

export default Home;