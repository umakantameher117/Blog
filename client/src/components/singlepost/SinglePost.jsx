import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="S-post">
      <img src="/postimg.jpg" alt="post-image" className="post-img" />
      <div className="postInfo">
        <div className="post-cat">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">This is my post title</span>
        <hr />
        <span className="postDate">Posted an hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
