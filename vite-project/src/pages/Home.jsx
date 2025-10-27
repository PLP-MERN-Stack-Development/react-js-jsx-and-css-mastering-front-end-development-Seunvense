import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

function Home() {
  return (
    <Card title="Task Manager">
      <TaskManager />
    </Card>
  );
}

export default Home;