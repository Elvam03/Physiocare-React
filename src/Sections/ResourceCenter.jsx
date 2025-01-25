import React, { useState } from 'react';
import { Link } from "react-router-dom";


const ResourceCenter = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsAndBlog = [
    {
      id: 1,
      title: "5 Tips for Better Posture",
      description: "Learn how to improve your posture and reduce back pain.",
      link: "/blog/posture-tips",
    },
    {
      id: 2,
      title: "Latest Trends in Physiotherapy",
      description: "Discover what's new in the world of physiotherapy.",
      link: "/blog/physio-trends",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Chronic Pain",
      description: "An in-depth look at the causes and treatments of chronic pain.",
      link: "/articles/chronic-pain",
    },
    {
      id: 2,
      title: "Benefits of Regular Exercise",
      description: "Why staying active is essential for your health.",
      link: "/articles/regular-exercise",
    },
  ];

  return (
    <div className="resource-center my-9">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center mt-5">Resource Center</h2>
      <p className="text-gray-400 max-w-lg mx-auto mb-3 text-center p-3">
        Find articles and guides about physiotherapy, common conditions, and recovery tips.
      </p>
      <div className="flex justify-center gap-14 p-2 mb-6">
        <button
          className={`tab-button mr-5 ${activeTab === "news"
            ? "border-b-4 border-blue-500 font-semibold text-blue-600"
            : "text-gray-600"}`}
          onClick={() => setActiveTab('news')}
        >
          News & Blog
        </button>
        <button
          className={`tab-button ${activeTab === "articles"
            ? "border-b-4 border-blue-500 font-semibold text-blue-600"
            : "text-gray-600"}`}
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'news' && (
          <div className="news-tab">
            {newsAndBlog.map((item) => (
              <div key={item.id} className="content-card mb-4 mx-3 p-4 border rounded shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <a href={item.link} className="text-blue-500 hover:underline">Read More</a>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'articles' && (
          <div className="articles-tab">
            {articles.map((item) => (
              <div key={item.id} className="content-card mb-4 mx-3 p-4 border rounded shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <a href={item.link} className="text-blue-500 hover:underline">Read More</a>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='flex justify-center items-center my-8'>
        
          <Link
            to="/resourcePage"
            className="bg-teal-500 rounded-md hover-bg-teal-600 text-white p-3 font-semibold"
          >
            Go to Page
          </Link>
      </div>

    </div>
  );
};

export default ResourceCenter;
