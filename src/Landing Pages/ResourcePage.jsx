import React, { useState } from 'react';
import Navbar from "../Properties/Navbar";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const ResourcePage = () => {
    const [activeTab, setActiveTab] = useState('news');
    const [expandedCard, setExpandedCard] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [commentModal, setCommentModal] = useState(null);
    const [commentInput, setCommentInput] = useState("");
    const [commentList, setCommentList] = useState({});

    const newsAndBlog = [
        {
            id: 1,
            title: "AI-Powered Physiotherapy in Scotland",
            description: "Physiotherapy and AI",
            content: "Scotland has introduced 'Kirsty' an AI-powered virtual physiotherapist, to address back pain and reduce NHS waiting times. Developed by Flok Health, this service allows nearly a million people in the Lothians to book same-day appointments via a phone app, providing sessions and treatment exercises. Initial feedback from a pilot with NHS Lothian's occupational health service was overwhelmingly positive, leading to its regional expansion. Researchers will evaluate its effectiveness, potentially leading to more virtual NHS consultations nationwide",
            timestamp: "2025-01-28T10:30:00",
        },
        {
            id: 2,
            title: "Aquatic Therapy, a rising trend in Physical Therapy",
            description: "Discover what's new in the world of physiotherapy.",
            content: "The field is witnessing advancements in technology, including the adoption of aquatic therapy. Also known as hydrotherapy, this therapeutic technique offers a low-impact environment for rehabilitation. Aquatic therapy is recognized for its therapeutic benefits, such as reduced joint stress and enhanced flexibility, making it an attractive option for diverse patient populations. Clinicians incorporating aquatic therapy into their facilities will witness its efficacy in helping address musculoskeletal issues and promote patient well-being. As this trend continuously gains momentum, physical therapists should consider its potential to enhance patient outcomes and satisfaction.",
            timestamp: "2025-01-28T10:30:00",

        },

    ];

    const articles = [
        {
            id: 1,
            title: "Understanding Chronic Pain",
            description: "An in-depth look at the causes and treatments of chronic pain.",
            content: "Chronic pain is typically defined as pain that lasts for longer than three months. It can occur in any part of the body and may range from mild to severe.   ",
            timestamp: "2025-01-28T10:30:00",

        },
        {
            id: 2,
            title: "Benefits of Regular Exercise",
            description: "Why staying active is essential for your health.",
            content: "Regular exercise strengthens muscles, improves mental health, and reduces the risk of diseases like heart problems.",
            timestamp: "2025-01-28T10:30:00",

        },
    ];



    const handleFilter = (filter) => {
        setActiveFilter(filter);
    };

    const filteredContent = (data) => {
        if (activeFilter === 'all') return data;
        if (activeFilter === 'latest') {
            return data.filter((item) => new Date(item.timestamp) > Date.now() - 7 * 24 * 60 * 60 * 1000);
        }
        return data;
    };

    const renderContent = (contentData) =>
        filteredContent(contentData).map((item) => {
            const formattedTimestamp = new Intl.DateTimeFormat('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short',
            }).format(new Date(item.timestamp));

            return (
                <div key={item.id} className="content-card mb-4 p-4 bg-white border rounded shadow-sm">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                    <p className="text-sm text-gray-500">{`Posted on: ${formattedTimestamp}`}</p>
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                    >
                        {expandedCard === item.id ? 'Show Less' : 'Read More'}
                    </button>
                    {expandedCard === item.id && <p className="mt-2 text-gray-600">{item.content}</p>}
                </div>
            );
        });

    const handleLike = (id) => {
        setLikes((prevLikes) => ({ ...prevLikes, [id]: (prevLikes[id] || 0) + 1 }));
    };

    const handleComment = (id) => {
        setCommentModal(id);
    };

    const handleSendComment = () => {
        if (commentInput.trim() !== "") {
            setCommentList((prevComments) => ({
                ...prevComments,
                [commentModal]: [...(prevComments[commentModal] || []), commentInput],
            }));
            setCommentInput("");
        }
    };

    const handleShare = (id) => {
        console.log(`Shared post ${id}`);
    };




    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className="sticky top-0 z-20">
                <div className="fixed top-4 left-4 z-50">
                    <Link to="/" className="">
                        <img src="/Images/back.png" alt="Back" className="h-8 w-8 md:h-12 md:w-12" />
                    </Link>
                </div>
                <Navbar />
            </div>

            <div>
                <h3 className='text-center text-gray-500 text-3xl font-semibold m-4'>Resource Center</h3>
            </div>

            <div className='p-4'>
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

                {/* Filters */}
                <div className="flex justify-center mb-4">
                    {activeTab === 'news' && (
                        <div className="flex gap-2 overflow-x-auto hide-scrollbar p-2">
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'all' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('all')}
                            >
                                All
                            </button>
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'top' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('top')}
                            >
                                Top
                            </button>
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'latest' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('latest')}
                            >
                                Latest
                            </button>
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === '' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('favorites')}
                            >
                                Favorites
                            </button>
                        </div>
                    )}
                    {activeTab === 'articles' && (
                        <div className="flex gap-2 overflow-x-auto hide-scrollbar p-2">
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'all' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('all')}
                            >
                                All
                            </button>
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'favorites' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('favorites')}
                            >
                                Favorites
                            </button>
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'orthopedic' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('orthopedic')}
                            >
                                Orthopedic
                            </button>
                            <button
                                className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'neurological' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                onClick={() => handleFilter('neurological')}
                            >
                                Neurological
                            </button>

                        </div>
                    )}
                </div>


                {activeTab === 'news' && (
                    <div className="news-tab">
                        {filteredContent(newsAndBlog).map((item) => {
                            const formattedTimestamp = new Intl.DateTimeFormat('en-US', {
                                dateStyle: 'medium',
                                timeStyle: 'short',
                            }).format(new Date(item.timestamp));

                            return (
                                <div key={item.id} className="content-card mb-4 mx-3 p-4 bg-white border rounded shadow-sm">
                                    <div className="flex justify-end gap-3 p-2 text-gray-500">
                                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleLike(item.id)}>
                                            <FaThumbsUp />
                                            <span>{likes[item.id] || 0}</span>
                                        </div>
                                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleComment(item.id)}>
                                            <FaComment />
                                            <span>{comments[item.id] || 0}</span>
                                        </div>
                                        <FaShare className="cursor-pointer" onClick={() => handleShare(item.id)} />

                                    </div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-700">{item.description}</p>
                                    <p className="text-sm text-gray-500">{`Posted on: ${formattedTimestamp}`}</p>
                                    <button
                                        className="text-blue-500 hover:underline"
                                        onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                                    >
                                        {expandedCard === item.id ? 'Show Less' : 'Read More'}
                                    </button>
                                    {expandedCard === item.id && (
                                        <p className="mt-2 text-gray-600">{item.content}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {commentModal !== null && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h3 className="text-xl font-semibold mb-4">Comments</h3>
                            <div className="mb-4 max-h-40 overflow-y-auto">
                                {(commentList[commentModal] || []).map((comment, index) => (
                                    <p key={index} className="p-2 bg-gray-100 rounded mb-2">{comment}</p>
                                ))}
                            </div>
                            <textarea
                                className="w-full p-2 border rounded mb-2"
                                placeholder="Write a comment..."
                                value={commentInput}
                                onChange={(e) => setCommentInput(e.target.value)}
                            ></textarea>
                            <div className="flex justify-between">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSendComment}>Send</button>
                                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setCommentModal(null)}>Close</button>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'articles' && (
                    <div className="articles-tab">
                        {filteredContent(articles).map((item) => {
                            const formattedTimestamp = new Intl.DateTimeFormat('en-US', {
                                dateStyle: 'medium',
                                timeStyle: 'short',
                            }).format(new Date(item.timestamp));

                            return (
                                <div key={item.id} className="content-card mb-4 mx-3 p-4 bg-white border rounded shadow-sm">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-700">{item.description}</p>
                                    <p className="text-sm text-gray-500">{`Posted on: ${formattedTimestamp}`}</p>
                                    <button
                                        className="text-blue-500 hover:underline"
                                        onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                                    >
                                        {expandedCard === item.id ? 'Show Less' : 'Read More'}
                                    </button>
                                    {expandedCard === item.id && (
                                        <p className="mt-2 text-gray-600">{item.content}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

            </div>
        </div>
    );

};

export default ResourcePage;
