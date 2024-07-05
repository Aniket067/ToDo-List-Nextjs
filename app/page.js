

"use client"; // Ensure this is a client component


import axios from 'axios';
import Todo from 'Components/Todo';

import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api');
      setTodoData(response.data.todos); // Corrected to response.data.todos
    } catch (error) {
      toast.error("Failed to fetch todos");
    }
  };

  const DeleteTodo = async (id) => {
    const response = await axios.delete('/api', {
      params: {
        mongoId: id
      }
    })
    toast.success(response.data.message);
    fetchTodos();
  }
  const completeTodo = async (id) => {
    const response = await axios.put('/api', {}, {
      params: {
        mongoId: id
      }
    })
    toast.success(response.data.message);
    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api', formData);
      toast.success(response.data.message);
      setFormData({
        title: "",
        description: "",
      });
      fetchTodos(); // Refresh the list after adding a new todo
    } catch (error) {
      toast.error("Error adding todo");
    }
  };

  return (
    <>
      <ToastContainer theme='dark' />
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 w-[80%] max-w-[600px] mt-24 px-4 py-6 bg-white shadow-md rounded-lg mx-auto">
        <input
          value={formData.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-4 py-2 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          value={formData.description}
          onChange={onChangeHandler}
          name="description"
          placeholder="Enter Description"
          className="px-4 py-2 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          className="bg-purple-500 py-3 px-8 text-white rounded-lg hover:bg-purple-600 transition duration-300"
          type="submit"
        >
          Add Task
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[80%] max-w-[1000px] mx-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr className='bg-gradient-to-r from-purple-300 to-indigo-100'>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => (
              <Todo
                key={item._id}
                id={index}
                title={item.title}
                description={item.description}
                complete={item.isCompleted}
                mongoId={item._id}
                DeleteTodo={DeleteTodo}
                completeTodo={completeTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
