import "./heading.css";

class Heading {
  render() {
    const heading = document.createElement("h1");

    heading.innerHTML = "Webpack is awesome";

    const body = document.querySelector("body");
    body.appendChild(heading);
  }
}

export default Heading;
