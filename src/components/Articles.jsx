import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/blog';
import { Calendar, ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';

function Articles() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  const getReadTime = (description) => {
    const words = (description || '').split(' ').length;
    return Math.max(3, Math.ceil(words / 50) + 2);
  };

  return (
    <div className='pt-20 pb-16 xl:pb-24 px-5 md:px-10 xl:px-20 dark:bg-slate-900'>
      {/* HEADER */}
      <div className='text-center px-5'>
        <div className='inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-5'>
          <BookOpen size={14} />
          <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">
                                file<span className="text-indigo-600">to</span>any
                              </span> Blog
        </div>
        <h2 className='text-[45px]/15 xl:text-[58px]/16 mb-4 font-bold tracking-tight'>
          Latest Articles
        </h2>
        <span className='font-medium text-[18px] xl:text-[20px] dark:text-gray-400 text-slate-600'>
          Tips, guides and best practices for file conversion
        </span>
      </div>

      {/* ARTICLES GRID */}
      {latestPosts.length === 0 ? (
        <p className="text-center text-slate-500 mt-10">No articles yet.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 mt-14'>

          {latestPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className='group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500'
            >
              {/* COLORED HEADER BAR */}
              <div className={`h-1.5 w-full ${
                index === 0 ? 'bg-blue-500' :
                index === 1 ? 'bg-emerald-500' :
                'bg-violet-500'
              }`} />

              <div className='flex flex-col flex-1 p-6 xl:p-7'>

                {/* TOP ROW: BADGE + DATE */}
                <div className='flex items-center justify-between mb-4'>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                    index === 0 ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' :
                    index === 1 ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' :
                    'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400'
                  }`}>
                    <Sparkles size={11} />
                    Guide
                  </span>
                  <span className='flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400'>
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className='text-xl xl:text-[22px] font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3'>
                  {post.title}
                </h3>

                {/* DESCRIPTION */}
                <p className='mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1'>
                  {post.description}
                </p>

                {/* DIVIDER */}
                <hr className='my-5 border-slate-100 dark:border-slate-700' />

                {/* BOTTOM ROW */}
                <div className='flex items-center justify-between'>
                  <span className='flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400'>
                    <Clock size={13} />
                    {getReadTime(post.description)} min read
                  </span>
                  <span className='flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all'>
                    Read
                    <ArrowRight size={15} />
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>
      )}

      {/* VIEW ALL BUTTON */}
      {latestPosts.length > 0 && (
        <div className='text-center mt-14'>
          <Link
            to='/blog'
            className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30 transition hover:bg-blue-700 hover:gap-3'
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Articles;