class User {
    constructor(username, email) {
      this.username = username;
      this.email = email;
    }
  
    toJSON() {
      return { username: this.username, email: this.email };
    }
  
    static fromJSON(json) {
      return new User(json.username, json.email);
    }
  }

  class Post {
    constructor(title, description, author, date = new Date()) {
      this.title = title;
      this.description = description;
      this.author = author; 
      this.date = date;
    }
  
    toJSON() {
      return {
        title: this.title,
        description: this.description,
        author: this.author,
        date: this.date
      };
    }
  
    static fromJSON(json) {
      return new Post(json.title, json.description, json.author, new Date(json.date));
    }
  }
  

  class Blog {
    constructor() {
      this.users = [];
      this.posts = [];
      this.loadFromLocalStorage();
    }
  
    addUser(user) {
      if (this.users.find(u => u.username === user.username)) {
        alert(`L'utilisateur ${user.username} existe déja !`);
        return;
      }
      this.users.push(user);
      this.saveToLocalStorage();
    }
  
    addPost(post) {
      if (!this.users.some(u => u.username === post.author)) {
        alert(`L'utilisateur ${post.author} n'existe pas. Veuillez créer l'utilisateur d'abord.`);
        return;
      }
      this.posts.push(post);
      this.saveToLocalStorage();
    }
  
    saveToLocalStorage() {
      const data = {
        users: this.users.map(u => u.toJSON()),
        posts: this.posts.map(p => p.toJSON())
      };
      localStorage.setItem('miniBlogData', JSON.stringify(data));
    }
  
    loadFromLocalStorage() {
      const dataString = localStorage.getItem('miniBlogData');
      if (dataString) {
        try {
          const data = JSON.parse(dataString);
          this.users = data.users.map(u => User.fromJSON(u));
          this.posts = data.posts.map(p => Post.fromJSON(p));
        } catch (e) {
          console.error('Error de parsing JSON : ', e);
        }
      }
    }
  }
  
  const blog = new Blog();
  
  const userForm = document.getElementById('userForm');
  const postForm = document.getElementById('postForm');
  const postList = document.getElementById('postList');
  
  userForm.addEventListener('submit', event => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
  
    if (username && email) {
      blog.addUser(new User(username, email));
      userForm.reset();
      alert('Utilisateur creer avec succès !');
    }
  });
  
  postForm.addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('postTitle').value.trim();
    const description = document.getElementById('postDescription').value.trim();
    const author = document.getElementById('postAuthor').value.trim();
  
    if (title && description && author) {
      blog.addPost(new Post(title, description, author));
      postForm.reset();
      alert('Post publier avec succés !');
      displayPosts();
    }
  });
  
  displayPosts();
  