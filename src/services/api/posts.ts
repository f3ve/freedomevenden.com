import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MY_API_KEY}`,
  },
});

export function getPostsSlugs() {
  return api.get(`/posts`, {
    params: {
      'fields[0]': 'slug',
    },
  });
}

export function getPosts(search?: string) {
  return api.get(`/posts`, {
    params: {
      'filters[title][$contains]': search,
      'fields[0]': 'title',
      'fields[1]': 'id',
      'fields[2]': 'slug',
    },
  });
}

export function getPostBySlug(slug: string) {
  return api.get(`/posts`, {
    params: {
      'filters[slug][$eq]': slug,
    },
  });
}
