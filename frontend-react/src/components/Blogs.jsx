import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blogs = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="py-20 bg-white" id="blogs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Read Our Latest <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-slate-600">Stay up to date with core technical concepts, software roadmaps, and internship insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map(blog => (
            <div 
              key={blog.id} 
              className="bg-white border border-slate-100 rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={blog.image_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'} 
                  alt={blog.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80' }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3">
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{blog.read_time}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <a href={blog.link} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 mt-auto hover:text-blue-700">
                  <span>Read Full Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
