const posts = [
    {name: "Why CS is Better", filename: "cs-is-better.html"},
    {name: "How to get a job in today's market", filename: "job.html"}
]

const blog_posts_div = document.getElementById("blog-posts");

posts.forEach(posts => {
    const post_tag = document.createElement("a");
    post_tag.textContent = posts.name;
    post_tag.href = "posts/" + posts.filename;

    blog_posts_div.appendChild(post_tag);
});