import { useState } from "react";

export default function MenuNode({ node }) {
  const [expandable, setExpandable] = useState(node.children?.length > 0);
  const [expanded, setExpanded] = useState(false);

  function toggleMenu() {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  return (
    <>
      <div
        className={expandable ? "item expandable" : "item"}
        onClick={() => toggleMenu()}
      >
        <span>{node.label} </span>{" "}
        {expandable && <span> {expanded ? "-" : "+"} </span>}
      </div>

      {expandable && expanded && (
        <ul>
          {node.children.map((node, index) => {
            return (
              <li key={index}>
                <MenuNode node={node} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
