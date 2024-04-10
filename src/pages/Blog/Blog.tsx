import React from "react";
import Title from "../../components/Title/Title";
import BlogPost from "../../components/BlogPost/BlogPost";
import data from "../../bloglist.json";
import AboutBlog from "../../components/AboutBlog/AboutBlog";

const Blog: React.FC = () => {
  return (
    <div>
      <Title text="The Blog" />
      <BlogPost data={data} />
      <AboutBlog />
    </div>
  );
};

export default Blog;
