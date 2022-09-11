import "./logo-image-button.scss";
import Logo from "./logo.png";

class LogoImageButton {
  buttonCssClass = "logo-image-button";
  imgCssClass = "logo-image";

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Logo Image";
    button.classList.add(this.buttonCssClass);

    button.onclick = () => {
      const img = document.createElement("img");
      img.src = Logo;
      img.alt = "Logo";
      img.classList.add(this.imgCssClass);

      const body = document.querySelector("body");
      body.appendChild(img);
    };

    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default LogoImageButton;
