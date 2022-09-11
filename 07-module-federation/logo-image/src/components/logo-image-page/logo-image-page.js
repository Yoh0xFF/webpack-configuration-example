import Heading from "../heading/heading";
import LogoImageButton from "../logo-image-button/logo-image-button";
import _ from "lodash";

class LogoImagePage {
  render() {
    const heading = new Heading();
    heading.render(_.upperFirst("logo image"));

    const logoImageButton = new LogoImageButton();
    logoImageButton.render();
  }
}

export default LogoImagePage;
