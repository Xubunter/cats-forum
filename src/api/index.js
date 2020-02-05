export const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(() => ({ error: "Ошибка получения постов" }));
};

export const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(() => ({ error: "Ошибка получения пользователей" }));
};

export const getComments = postId => {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(() => ({ error: "Не удалось получить комментарии" }));
};

export const getAvatar = (width = 100, height = 100) => {
  return `https://placekitten.com/g/${width}/${height}`;
};
