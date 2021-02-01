export default class {
  constructor(props: {}) {
    const config = (<any>Object).assign(props || {}, {
      hiders: "data-js-hide",
      showers: "data-js-show",
    });
    const hiders = document.querySelectorAll(`[${config.hiders}]`);
    if (hiders) {
      hiders.forEach((d: HTMLElement) => {
        const targets = document.querySelectorAll(
          d.getAttribute(config.hiders)
        );
        if (targets) targets.forEach((t) => t.setAttribute("hidden", ""));
      });
    }
    const showers = document.querySelectorAll(`[${config.showers}]`);
    if (showers) {
      showers.forEach((d: HTMLElement) => {
        const targets = document.querySelectorAll(
          d.getAttribute(config.hiders)
        );
        if (targets) targets.forEach((t) => t.removeAttribute("hidden"));
      });
    }
  }
}
