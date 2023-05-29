import { ReactDOM } from "react";

function renderBg() {
  const element = (
    <div
      className="ContactBg"
      style={{
        "--img":
          "url('https://images.unsplash.com/photo-1610907083431-d36d8947c8e2')",
      }}
    ></div>
  );

  ReactDOM.render(element, document.getElementById("ContactUsContainer"));
}

export default renderBg;
