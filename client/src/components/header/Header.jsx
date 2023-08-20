import "./Header.css";
export default function Header() {
  return <header>
    <div className="header">
        <div className="header-titles">
            <span className="htsmall">React&Node</span>
            <span className="htbig">Blog</span>
        </div>
        <img src="/header.jpg" alt="header-img" className="header-img" />
    </div>
  </header>;
}
