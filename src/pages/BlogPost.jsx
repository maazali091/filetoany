import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../lib/blog';
import { ArrowLeft, Calendar, Clock, BookOpen, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Read time estimate
  const wordCount = (post.content || '').split(' ').length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* ARTICLE HEADER */}
      <section className="pt-10 pb-10 xl:pt-16 xl:pb-14 px-5 md:px-10 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-6"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Category */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-5">
            <BookOpen size={13} />
            Guide
          </div>

          {/* Title */}
          <h1 className="text-4xl xl:text-5xl/15 font-bold tracking-tight text-slate-900 dark:text-white">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mt-5 text-lg xl:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {post.description}
          </p>

          {/* Meta row */}
          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">
                {post.author?.charAt(0) || 'M'}
              </div>
              <span className="font-medium text-slate-700 dark:text-slate-300">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} />
              {readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-12 xl:py-16 px-5 md:px-10">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-h2:text-2xl xl:prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-xl xl:prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-7 prose-p:text-base prose-p:my-3
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-ul:my-3 prose-ul:pl-5 prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:my-1
            prose-ol:my-3 prose-ol:pl-5
            prose-table:my-5 prose-table:w-full prose-table:border-collapse prose-table:rounded-lg prose-table:overflow-hidden prose-table:text-sm
            prose-thead:bg-slate-100 dark:prose-thead:bg-slate-800
            prose-th:px-4 prose-th:py-2.5 prose-th:text-left prose-th:font-semibold prose-th:text-slate-900 dark:prose-th:text-white prose-th:border prose-th:border-slate-200 dark:prose-th:border-slate-700
            prose-td:px-4 prose-td:py-2.5 prose-td:text-slate-700 dark:prose-td:text-slate-300 prose-td:border prose-td:border-slate-200 dark:prose-td:border-slate-700
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-500/10 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:my-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-hr:my-6
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </article>

          {/* CTA CARD */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-blue-950/40 p-8 xl:p-10">
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-200/40 dark:bg-indigo-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-200/40 dark:bg-blue-500/10 blur-3xl"></div>

            <div className="relative flex flex-col items-center text-center">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 mb-5">
                <Zap size={26} />
              </div>

              {/* Heading */}
              <h3 className="text-3xl xl:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                Ready to convert your files?
              </h3>

              {/* Subtext */}
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
                Join thousands of users who convert files every day. Fast, secure, and free to start.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <Shield size={13} className="text-emerald-600" /> Secure
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <Zap size={13} className="text-amber-500" /> Fast
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <Sparkles size={13} className="text-indigo-500" /> 10+ Tools
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  to="/sign-up"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 transition hover:bg-indigo-700 hover:-translate-y-0.5"
                >
                  Sign Up Free <ArrowRight size={16} />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 font-semibold text-slate-700 dark:text-slate-200 transition hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ArrowLeft size={16} /> Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;