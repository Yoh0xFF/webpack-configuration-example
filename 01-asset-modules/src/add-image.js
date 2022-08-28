import Logo from "./webpack-logo.png";
import LogoSvg from "./webpack-logo.svg";
import altText from "./alt-text.txt";

export function addImage() {
  const image = document.createElement("img");
  image.alt = altText;
  image.width = image.height = 512;
  image.src = Logo;

  const body = document.querySelector("body");
  body.appendChild(image);
}

export function addImageSvg() {
  const image = document.createElement("img");
  image.alt = altText;
  image.width = image.height = 32;
  image.src = LogoSvg;

  const body = document.querySelector("body");
  body.appendChild(image);
}
