import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Twitter, Linkedin, Facebook, Clock, Tag } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';

const NewsArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  // Mock article data - in a real app, this would come from an API or CMS
  const articles = {
    '1': {
      id: '1',
      title: 'EdgeUp Raises ₹8 Crore in Seed Funding',
      date: 'March 15, 2024',
      author: 'EdgeUp Team',
      category: 'Funding',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Leading EdTech startup EdgeUp has secured ₹8 crore in seed funding from Enlighten Capital and other prominent investors to accelerate its mission of transforming competitive exam preparation through AI.',
      content: `
        <p>EdgeUp, India's innovative AI-powered learning platform, today announced the successful completion of its seed funding round, raising ₹8 crore from a group of strategic investors led by Enlighten Capital.</p>

        <p>The funding will be used to enhance EdgeUp's AI capabilities, expand its institutional partnerships, and strengthen its presence across India. The company plans to focus on developing more specialized modules for various competitive exams and improving its psychometric assessment tools.</p>

        <h2>Transforming Competitive Exam Preparation</h2>

        <p>"This investment validates our vision of transforming how institutions prepare students for competitive exams," said Jubran Siddique, CEO of EdgeUp. "With this funding, we'll be able to reach more institutions and impact millions of students across India."</p>

        <p>EdgeUp's proprietary PASCO framework (Personality, Aptitude, Skills, Character, Observation) has already shown remarkable results in pilot programs with leading coaching institutes. The platform's AI-driven personalization has helped students achieve up to 32% improvement in test scores.</p>

        <h2>Strategic Investor Participation</h2>

        <p>The round saw participation from several notable angel investors and education sector veterans, highlighting the industry's confidence in EdgeUp's innovative approach to personalized learning.</p>

        <blockquote>
          <p>"EdgeUp's technology represents the future of education. Their ability to combine AI with deep educational insights is truly remarkable," said a representative from Enlighten Capital.</p>
        </blockquote>

        <h2>Future Plans and Expansion</h2>

        <p>With this new funding, EdgeUp plans to:</p>

        <ul>
          <li>Expand its team of AI researchers and education specialists</li>
          <li>Develop new assessment modules for state-level competitive exams</li>
          <li>Enhance the platform's multilingual capabilities</li>
          <li>Strengthen partnerships with educational institutions across India</li>
        </ul>

        <p>The company is also exploring opportunities to expand into international markets, particularly in Southeast Asia, where there's growing demand for AI-powered educational solutions.</p>

        <h2>About EdgeUp</h2>

        <p>Founded in 2022, EdgeUp is India's first AI-driven learning companion tailored for institutions preparing students for UPSC, state exams, and other competitive tests. The platform uses advanced psychometric profiling and adaptive learning algorithms to create personalized study paths for each student.</p>

        <p>EdgeUp currently partners with over 150 institutions across India and has impacted more than 50,000 students. The company is headquartered in Chennai and has a growing team of 135+ professionals.</p>
      `,
      tags: ['Funding', 'AI', 'EdTech', 'Startup'],
      featured: true
    },
    '2': {
      id: '2',
      title: 'EdgeUp Partners with Leading UPSC Coaching Institutes',
      date: 'March 1, 2024',
      author: 'Marketing Team',
      category: 'Partnerships',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Strategic partnerships with top coaching institutes mark a significant milestone in EdgeUp\'s mission to revolutionize UPSC preparation through AI-powered personalization.',
      content: `
        <p>EdgeUp today announced partnerships with several leading UPSC coaching institutes across Delhi, Mumbai, and Bangalore. These partnerships will bring EdgeUp's AI-powered learning platform to thousands of UPSC aspirants.</p>

        <p>The collaboration will enable these institutes to offer personalized learning experiences to their students, leveraging EdgeUp's advanced psychometric profiling and adaptive testing capabilities.</p>

        <h2>Partnership Benefits</h2>

        <p>"Our partnership with these prestigious institutes marks a significant step in our journey," said Khalid Mohamed, Chairman of EdgeUp. "Together, we're setting new standards in UPSC preparation."</p>

        <p>The partnerships will provide students with:</p>

        <ul>
          <li>Personalized study plans based on individual learning patterns</li>
          <li>Adaptive mock tests that adjust difficulty in real-time</li>
          <li>Detailed performance analytics and improvement recommendations</li>
          <li>AI-powered doubt resolution and concept clarification</li>
        </ul>

        <h2>Proven Results</h2>

        <p>Initial results from pilot programs show significant improvements in student engagement and test scores, with some institutes reporting up to 30% better results in mock tests.</p>

        <blockquote>
          <p>"The personalized approach has transformed how our students prepare. We're seeing unprecedented engagement levels," said Dr. Rajesh Kumar, Director of Delhi IAS Academy.</p>
        </blockquote>

        <p>The platform's ability to identify knowledge gaps and provide targeted interventions has been particularly appreciated by both students and faculty members.</p>

        <h2>Technology Integration</h2>

        <p>EdgeUp's seamless integration with existing institute systems ensures minimal disruption while maximizing benefits. The platform works alongside traditional teaching methods, enhancing rather than replacing proven pedagogical approaches.</p>

        <p>Faculty members receive comprehensive training and ongoing support to effectively utilize the platform's capabilities in their teaching methodology.</p>
      `,
      tags: ['Partnerships', 'UPSC', 'Coaching', 'Education'],
      featured: false
    },
    '3': {
      id: '3',
      title: 'AI in Education: The Future is Here',
      date: 'February 20, 2024',
      author: 'Jubran Siddique',
      category: 'Insights',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Exploring how artificial intelligence is reshaping the educational landscape and what it means for students and institutions.',
      content: `
        <p>The integration of artificial intelligence in education represents one of the most significant shifts in how we approach learning and teaching. As we stand at the forefront of this revolution, it's important to understand both the opportunities and challenges that lie ahead.</p>

        <h2>Beyond Automation: Creating Human Connections</h2>

        <p>AI-powered educational platforms are not just about automation; they're about creating more human, more personalized learning experiences. By understanding each student's unique learning patterns, strengths, and areas for improvement, AI can help educators provide targeted support that was previously impossible at scale.</p>

        <p>At EdgeUp, we've seen firsthand how our PASCO framework can transform learning outcomes. Students who previously struggled with traditional one-size-fits-all approaches are now thriving with personalized learning paths that adapt to their individual needs.</p>

        <h2>The Power of Psychometric Analysis</h2>

        <p>One of the most exciting developments in AI-powered education is the ability to conduct deep psychometric analysis. This goes beyond simple performance metrics to understand:</p>

        <ul>
          <li>Learning style preferences and cognitive patterns</li>
          <li>Motivation factors and engagement triggers</li>
          <li>Optimal study timing and content sequencing</li>
          <li>Stress patterns and performance anxiety indicators</li>
        </ul>

        <blockquote>
          <p>"The future of education is not about replacing teachers with machines, but about empowering educators with insights that help them connect with each student more effectively."</p>
        </blockquote>

        <h2>Real-World Impact</h2>

        <p>The impact of AI in education is already being felt across institutions worldwide. In India, where competitive exam preparation is particularly challenging, AI-powered platforms are helping students achieve better results with less stress and more confidence.</p>

        <p>Our data shows that students using AI-powered personalized learning platforms demonstrate:</p>

        <ul>
          <li>32% improvement in test scores on average</li>
          <li>Reduced study time with better retention</li>
          <li>Increased confidence and reduced exam anxiety</li>
          <li>Better long-term knowledge retention</li>
        </ul>

        <h2>Challenges and Considerations</h2>

        <p>While the potential of AI in education is immense, we must also address important considerations:</p>

        <p><strong>Privacy and Data Security:</strong> Educational AI systems handle sensitive student data, making privacy protection paramount. Institutions must ensure robust data security measures and transparent privacy policies.</p>

        <p><strong>Digital Divide:</strong> Access to AI-powered educational tools must be equitable. We're working to ensure our solutions are accessible across different socioeconomic backgrounds.</p>

        <p><strong>Teacher Training:</strong> Successful AI integration requires comprehensive teacher training and ongoing support to maximize the technology's potential.</p>

        <h2>Looking Ahead</h2>

        <p>The future of AI in education is bright, but it requires thoughtful implementation and continuous innovation. As we continue to develop and refine these technologies, our focus remains on enhancing human potential rather than replacing human connection.</p>

        <p>The goal is not to create a world where students learn in isolation from machines, but to create environments where technology amplifies the best of human teaching and learning.</p>
      `,
      tags: ['AI', 'Education', 'Technology', 'Future'],
      featured: false
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/news" className="text-[#094d88] hover:text-[#10ac8b] font-medium">
            ← Back to News
          </Link>
        </div>
      </main>
    );
  }

  useEffect(() => {
    document.title = `${article.title} - EdgeUp News`;
  }, [article.title]);

  const shareUrl = window.location.href;
  const shareText = `${article.title} - ${article.summary}`;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
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
      </div>

      {/* Article Header */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <Link 
                to="/news" 
                className="inline-flex items-center text-[#094d88] hover:text-[#10ac8b] font-medium transition-colors duration-300 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to News
              </Link>
            </div>

            {/* Article Meta */}
            <div className={`mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="bg-gradient-to-r from-[#10ac8b] to-[#094d88] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Article Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight mb-8 transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              {article.title}
            </h1>

            {/* Article Summary */}
            <p className={`text-xl text-gray-600 leading-relaxed mb-8 transition-all duration-1000 delay-600 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              {article.summary}
            </p>

            {/* Share Buttons */}
            <div className={`flex items-center space-x-4 mb-12 transition-all duration-1000 delay-800 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <span className="text-sm font-medium text-gray-700 flex items-center">
                <Share2 size={16} className="mr-2" />
                Share:
              </span>
              <button
                onClick={() => handleShare('twitter')}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-600 hover:text-[#1DA1F2] hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Twitter size={16} />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-600 hover:text-[#0077B5] hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={16} />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-600 hover:text-[#1877F2] hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <IntersectionObserver>
        <section className="relative z-10 mb-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-700 hover:scale-105">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Article Content */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-gray-700 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-[#10ac8b] prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Article Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag size={16} className="text-gray-500 mr-2" />
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 text-[#094d88] px-3 py-1 rounded-full text-sm font-medium border border-[#094d88]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Related Articles */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-12 text-center">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.values(articles)
                  .filter(a => a.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle, index) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/news/${relatedArticle.id}`}
                      className={`group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-up`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center space-x-4 text-sm mb-4">
                          <span className="bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-3 py-1 rounded-full text-xs font-medium">
                            {relatedArticle.category}
                          </span>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Calendar size={12} />
                            <span>{relatedArticle.date}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#094d88] transition-colors duration-300 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{relatedArticle.summary}</p>
                        
                        <div className="inline-flex items-center text-[#094d88] font-semibold hover:text-[#10ac8b] transition-all duration-300 group-hover:translate-x-2">
                          Read more
                          <ArrowLeft size={16} className="ml-2 rotate-180 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
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
                  Stay Updated with EdgeUp
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Get the latest insights on AI-powered education and EdTech innovations.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
                  <Link
                    to="/news"
                    className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      More Articles
                      <ArrowLeft className="ml-2 h-5 w-5 rotate-180 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-500 hover:scale-105"
                  >
                    Contact Us
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

export default NewsArticlePage;