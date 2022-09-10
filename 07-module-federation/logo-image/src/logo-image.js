import Heading from "./components/heading/heading";
import LogoImageButton from "./components/logo-image-button/logo-image-button";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("logo image"));

const logoImageButton = new LogoImageButton();
logoImageButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("This is a production build");
} else if (process.env.NODE_ENV === "development") {
  console.log("This is a development build");
} else {
  console.log("Build type not specified");
}
