import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ gistUrl }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(gistUrl);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching the gist content:', error);
      }
    };

    fetchContent();
  }, [gistUrl]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default BlogContent;