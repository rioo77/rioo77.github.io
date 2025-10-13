var posts=["2025/10/13/aaa/","2025/10/13/hello-world/","2025/10/13/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };