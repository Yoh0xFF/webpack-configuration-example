import "./hello-world-button.scss";

class HelloWorldButton {
  buttonCssClass = "hello-world-button";
  textCssClass = "hello-world-text";

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);

    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add(this.textCssClass);

      const body = document.querySelector("body");
      body.appendChild(p);
    };

    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;
