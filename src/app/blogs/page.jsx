import React from 'react';
import Post from '../components/Post';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    category: "React",
    date: "September 10, 2026",
    image: "/images/react.jpg",
    description: "Learn the fundamentals of React and build your first modern web application."
  },
  {
    id: 2,
    title: "A Beginner's Guide to JavaScript",
    author: "Jane Smith",
    category: "JavaScript",
    date: "September 11, 2026",
    image: "/images/javascript.jpg",
    description: "Understand the core concepts of JavaScript and start writing better code."
  },
  {
    id: 3,
    title: "How to Build a Modern Website",
    author: "Alex Johnson",
    category: "Web Development",
    date: "September 12, 2026",
    image: "/images/website.jpg",
    description: "Explore useful techniques for creating fast, responsive, and modern websites."
  },
  {
    id: 4,
    title: "Understanding Tailwind CSS",
    author: "Michael Brown",
    category: "CSS",
    date: "September 13, 2026",
    image: "/images/tailwind.jpg",
    description: "Discover how Tailwind CSS can help you design beautiful interfaces faster."
  },
  {
    id: 5,
    title: "10 Tips to Become a Better Developer",
    author: "Sarah Wilson",
    category: "Programming",
    date: "September 15, 2026",
    image: "/images/developer.jpg",
    description: "Simple and practical tips to improve your coding skills and development workflow."
  }
];


const BlogsPost = () => {
    return (
        <div>
            {blogPosts.map((post) => ( <Post key={post.id} post={post} /> ))}
        </div>
    );
};

export default BlogsPost;