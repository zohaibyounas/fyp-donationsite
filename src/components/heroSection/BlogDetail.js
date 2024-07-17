import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ blogs }) => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto mt-4 mb-4 md:px-28 md:py-4">
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
      <div className="mb-4 ">
        <img src={blog.image} alt={blog.title} className="h-[550px] w-full object-cover rounded " />
      </div>
      <div className="text-gray-600 text-sm mb-2">{blog.location}</div>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <div className="text-gray-500 text-sm">Published {blog.date}</div>
    </div>
  );
};

export default BlogDetail;
