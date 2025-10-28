import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

function ApiPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
        );
        if (!response.ok) throw new Error('Failed to fetch todos');
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchTodos();
  }, [page]);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card title="API Todos">
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search todos..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <ul className="space-y-2">
        {filteredTodos.length === 0 && !loading && !error && (
          <li className="text-center text-gray-500">No todos found</li>
        )}
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="p-3 border rounded-lg dark:border-gray-700"
          >
            <span
              className={todo.completed ? 'line-through text-gray-500' : ''}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <Button
          variant="primary"
          size="sm"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}

export default ApiPage;