import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/blog';
import { Calendar, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

function Blog() {
  const posts = getAllPosts();

  // Calculate read time (rough estimate)
  const getReadTime = (description) => {
    const words = (description || '').split(' ').length;
    return Math.max(3, Math.ceil(words / 50) + 2);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="pt-16 pb-10 xl:pt-24 xl:pb-16 px-5 md:px-10 xl:px-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-5">
            <BookOpen size={16} />
            <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">
                                file<span className="text-indigo-600">to</span>any
                              </span> Blog
          </div>
          <h1 className="text-5xl/15 xl:text-[62px]/18 font-bold text-slate-900 dark:text-white mb-4">
            Guides & Insights
          </h1>
          <p className="text-lg xl:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Practical guides on file conversion, document management, and everything you need to get the most out of your files.
          </p>
        </div>
      </section>

      {/* POSTS LIST */}
      <section className="py-12 xl:py-20 px-5 md:px-10 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <BookOpen size={48} className="mx-auto text-slate-400 mb-4" />
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No articles yet. Coming soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1"
                >
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <Sparkles size={12} />
                      Guide
                    </span>
                    {index === 0 && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        New
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Divider */}
                  <hr className="my-5 border-slate-100 dark:border-slate-800" />

                  {/* Meta row */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {getReadTime(post.description)} min
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Blog;