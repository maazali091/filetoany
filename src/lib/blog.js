import { parseFrontmatter } from 'frontmatter-kit';

const postFiles = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([path, content]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const result = parseFrontmatter(content);

    if (!result.hasFrontmatter) {
      return { slug, title: 'Untitled', description: '', date: '', author: 'Maaz Ali', keywords: [] };
    }

    const data = result.attributes;
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Maaz Ali',
      keywords: data.keywords || [],
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const path = `../content/posts/${slug}.md`;
  const content = postFiles[path];

  if (!content) return null;

  const result = parseFrontmatter(content);

  if (!result.hasFrontmatter) return null;

  const data = result.attributes;

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Maaz Ali',
    keywords: data.keywords || [],
    content: result.body,
  };
}