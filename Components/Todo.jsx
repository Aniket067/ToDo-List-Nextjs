



import React from 'react';

const Todo = ({ id, title, description, complete, mongoId, DeleteTodo, completeTodo }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {id + 1}
      </td>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 py-4">
        {complete ? "Completed" : "Pending"}
      </td>
      <td className="px-6 py-4 flex space-x-2 items-center">
        {!complete && (
          <button
            onClick={() => completeTodo(mongoId)}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Mark Done
          </button>
        )}
        <button
          onClick={() => DeleteTodo(mongoId)}
          className="text-red-500 hover:underline focus:outline-none"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;
