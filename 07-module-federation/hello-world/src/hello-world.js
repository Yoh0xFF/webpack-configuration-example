import Heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("hello world"));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("This is a production build");
} else if (process.env.NODE_ENV === "development") {
  console.log("This is a development build");
} else {
  console.log("Build type not specified");
}
