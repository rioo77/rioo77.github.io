var posts=["2025/10/15/test/","2025/10/13/我的第一篇博客/","2025/10/13/hello-world/","2025/10/15/aaa/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };