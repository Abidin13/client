import { Header, Post, Sidebar } from "../../components";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <Post />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
