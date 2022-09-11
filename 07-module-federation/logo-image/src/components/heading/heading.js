import "./heading.scss";

class Heading {
  render(pageName) {
    const heading = document.createElement("h1");

    heading.innerHTML = `Webpack is awesome. This is a "${pageName}" page.`;

    const body = document.querySelector("body");
    body.appendChild(heading);
  }
}

export default Heading;
