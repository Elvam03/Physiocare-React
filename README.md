# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 {
            id: 3,
            title: "Augmented Reality (AR) Applications",
            description: "Physiotherapy and Tech",
            content: "AR is being explored to assist patients with neurological conditions. A startup named Strolll has developed an AR program that projects virtual lines on the ground to guide patients with Parkinson's disease, helping them overcome mobility challenges. This technology also includes gamified rehabilitation exercises to enhance patient engagement. ",
            timestamp: "2025-01-24T11:10:00",


        },
        {
            id: 4,
            title: "Wearable Technology",
            description: "Technology devices used in fitness.",
            content: "Wearable devices continue to gain popularity in physiotherapy. The American College of Sports Medicine identified wearable technology as the top fitness trend for 2025. These devices monitor various health metrics, providing data that can inform personalized treatment plans and track patient progress.",
            timestamp: "2025-01-20T21:10:00",


        },

        {
            id: 5,
            title: "Telehealth Services",
            description: "Digital world of physiotherapy",
            content: "The adoption of telehealth in physiotherapy has expanded, providing patients with greater access to care. Virtual consultations and remote monitoring allow for flexible treatment options, especially beneficial for those with limited mobility or in remote areas.",
            timestamp: "2025-01-15T19:50:00",


        },


         <button
                                        className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'cardiovascular' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                        onClick={() => handleFilter('cardiovascular')}
                                    >
                                        Cardiovascular
                                    </button>
                                    <button
                                        className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'pediatric' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                        onClick={() => handleFilter('pediatric')}
                                    >
                                        Pediatric
                                    </button>
                                    <button
                                        className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'geriatric' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                        onClick={() => handleFilter('geriatric')}
                                    >
                                        Geriatric
                                    </button>
                                    <button
                                        className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'sports' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                        onClick={() => handleFilter('sports')}
                                    >
                                        Sports
                                    </button>
                                    <button
                                        className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'oncology' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                        onClick={() => handleFilter('oncology')}
                                    >
                                        Oncology
                                    </button>
                                    <button
                                        className={`filter-button px-8 py-2 mx-2 rounded-full ${activeFilter === 'occupational' ? 'bg-blue-500 text-white border-2 border-blue-500' : 'border-blue-500 border-2 bg-white'}`}
                                        onClick={() => handleFilter('occupational')}
                                    >
                                        Occupational
                                    </button>


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