import menu from "../menu.json";
import MenuNode from "./MenuNode";
import "./index.css";

export default function Menu() {
  console.log(menu);
  return (
    <div className="container">
      <h1>menu</h1>
      <ul>
        {menu.map((node, index) => {
          return (
            <li key={index}>
              <MenuNode node={node} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
