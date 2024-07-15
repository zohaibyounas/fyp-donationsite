import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({ blogs }) => {
  return (
    <div className="container bg-slate-100 mx-auto mt-4 mb-4 md:px-28 md:py-4 sm">
      <h1 className="text-3xl font-bold mb-6 mt-16 flex justify-center items-center">Blogs</h1>
      <div className="grid grid-cols-1 px-12 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-14">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-slate-100 p-4 rounded-lg shadow-md">
            <div className="h-48  bg-gray-300 mb-4">
              <img src={blog.image} alt={blog.title} className="h-52 object-cover w-96  rounded" />
            </div>
            <div className="text-gray-600 text-sm mb-2">{blog.location}</div>
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.content.substring(0, 100)}...</p>
            <Link to={`/blogs/${blog.id}`} className="text-blue-500 hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
