import NavigationBar from "./compoonents/navigation-bar/navigation-bar.js";

const navigationItems = [
  {
    url: "/hello-world-page",
    title: "Hello World Page",
  },
  {
    url: "/logo-image-page",
    title: "Logo Image Page",
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === "/logo-image-page") {
  import("LogoImageApp/LogoImagePage").then((LogoImagePageModule) => {
    const LogoImagePage = LogoImagePageModule.default;
    const logoImagePage = new LogoImagePage();
    logoImagePage.render();
  });
}
