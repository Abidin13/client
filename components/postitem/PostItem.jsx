// import { postimg } from "..";
import { PostDetails } from "../index";

function PostItem() {
  return (
    <div className="post">
      <div className="post__inner">
        <img
          className="post__img"
          // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-photo%2Fthe-team-is-preparing-a-balloon-with-a-fire-to-make-the-balloon-rise_11420990.htm&psig=AOvVaw3ZKB3S_GKc7S0YxiLvdMaJ&ust=1632765205221000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj0s8uanfMCFQAAAAAdAAAAABAD&auto=format&fit=crop&w=464&q=80"
          src="https://images.unsplash.com/photo-1524715324774-b46ab3971a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
          alt=""
        />
        <div className="post__content">
          <h3 className="post__title">Lorem ipsum dolor sit.</h3>
          <p className="post__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Expedita sit hic numquam quos, libero dolores illum sint at possimus
            dicta cum ratione incidunt dignissimos in esse tempore voluptas,
            quaerat omnis? <br /> Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptas, ullam. Culpa odit placeat quaerat,
            numquam quia cupiditate dolorum modi? <br /> Cumque harum
            reprehenderit rem iure expedita perspiciatis, cum dolores porro
            maxime? <br /> Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. <br /> Pariatur, perspiciatis modi nostrum quae, animi
            voluptates at repudiandae facilis, sint veritatis ex ratione
            asperiores voluptas et! Impedit consectetur sint ducimus ab?
          </p>
        </div>
      </div>
      <PostDetails />
    </div>
  );
}

export default PostItem;
