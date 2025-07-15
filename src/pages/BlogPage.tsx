import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Sparkles } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';

const BlogPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp Blog - AI Education Insights";
    setIsLoaded(true);
  }, []);

  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Personalized Learning: How AI is Transforming Education',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way students learn and teachers teach, creating more personalized and effective educational experiences.',
      author: 'Jubran Siddique',
      date: 'March 20, 2024',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: true
    },
    {
      id: '2',
      title: 'UPSC Preparation in the Digital Age: Strategies for Success',
      excerpt: 'Discover modern approaches to UPSC preparation that leverage technology and data-driven insights to maximize your chances of success.',
      author: 'Priya Sharma',
      date: 'March 18, 2024',
      readTime: '6 min read',
      category: 'UPSC Preparation',
      image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: false
    },
    {
      id: '3',
      title: 'Understanding Learning Styles: The Science Behind PASCO Framework',
      excerpt: 'Deep dive into the psychological and cognitive science that powers EdgeUp\'s PASCO framework for personalized learning.',
      author: 'Dr. Rajesh Kumar',
      date: 'March 15, 2024',
      readTime: '10 min read',
      category: 'Learning Science',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: false
    },
    {
      id: '4',
      title: 'Building Effective Study Habits with AI-Powered Insights',
      excerpt: 'Learn how to develop and maintain effective study habits using AI-powered analytics and personalized recommendations.',
      author: 'Anil Verma',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Study Tips',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: false
    },
    {
      id: '5',
      title: 'The Role of Psychometric Assessment in Modern Education',
      excerpt: 'Understanding how psychometric assessments can provide valuable insights into student capabilities and learning preferences.',
      author: 'Dr. Meera Patel',
      date: 'March 10, 2024',
      readTime: '9 min read',
      category: 'Assessment',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: false
    },
    {
      id: '6',
      title: 'EdTech Trends 2024: What to Expect in Educational Technology',
      excerpt: 'A comprehensive look at the emerging trends in educational technology and their potential impact on learning outcomes.',
      author: 'Khalid Mohamed',
      date: 'March 8, 2024',
      readTime: '12 min read',
      category: 'EdTech Trends',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: false
    }
  ];

  const categories = [
    'all',
    'AI & Technology',
    'UPSC Preparation',
    'Learning Science',
    'Study Tips',
    'Assessment',
    'EdTech Trends'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              EdgeUp Blog
              <div className="ml-2 w-2 h-2 bg-[#10ac8b] rounded-full animate-pulse"></div>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Insights & Ideas
            </h1>
            
            <p className={`text-xl text-gray-600 mt-8 leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Explore the latest insights on AI-powered education, learning strategies, and EdTech innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl mb-12">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="md:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Featured Article */}
      {featuredPost && (
        <IntersectionObserver>
          <section className="section-padding relative z-10">
            <div className="container-custom">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-gradient-to-r from-[#10ac8b] to-[#094d88] text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
                          Featured
                        </span>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar size={14} />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock size={14} />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">{featuredPost.excerpt}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <User size={14} />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Tag size={14} />
                          <span>{featuredPost.category}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="group relative overflow-hidden bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 inline-flex items-center"
                    >
                      <span className="relative z-10 flex items-center">
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </span>
                    </Link>
                  </div>

                  <div className="relative group">
                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-2 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-700 hover:scale-105">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                          src={featuredPost.image}
                          alt={featuredPost.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </IntersectionObserver>
      )}

      {/* Blog Grid */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest insights and trends in AI-powered education.
              </p>
            </div>

            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className={`group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                        src={post.image}
                        alt={post.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#094d88] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <User size={12} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#094d88] font-semibold hover:text-[#10ac8b] transition-all duration-300 group-hover:translate-x-2 mt-4"
                      >
                        Read more
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-xl max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">No articles found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="relative bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
                  Want to Contribute?
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Share your insights and expertise with the EdgeUp community. We're always looking for thought leaders in education and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
                  <Link
                    to="/contact"
                    className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Submit an Article
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                  <Link
                    to="/news"
                    className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-500 hover:scale-105"
                  >
                    Latest News
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      <style jsx>{`
        .particle-float {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #094d88, #10ac8b);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default BlogPage;