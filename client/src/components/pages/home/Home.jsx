import Header from "../../header/Header";
import SinPost from "../onlypost/SinPost";
import Post from "../../posts/Post";
import Sidebar from "../../sidebars/Sidebar";
import './Home.css'
export default function Home() {
  return (
    <main>
      <Header />
      <div className="home">
        <Post/>
        <Sidebar/>
      </div>
    </main>
  );
}
