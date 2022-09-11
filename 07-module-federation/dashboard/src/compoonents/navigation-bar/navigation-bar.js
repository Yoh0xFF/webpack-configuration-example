import "./navigation-bar.scss";

class NavigationBar {
  render(navigationItems) {
    const items = navigationItems.map((x) => {
      return `
				<li>
					<a href=${x.url}>${x.title}</a>
				</li>
			`;
    });

    const ul = document.createElement("ul");
    ul.innerHTML = items.join("");
    ul.classList.add("navigation-bar");
    document.querySelector("body").appendChild(ul);
  }
}

export default NavigationBar;
