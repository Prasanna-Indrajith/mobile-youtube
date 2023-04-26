function footerLinkAnimationAdd(event) {
  event.classList.add("footer-link-animated");
  const removeAnimatedClass = setTimeout(() => {
    event.classList.remove("footer-link-animated");
  }, 500);

  const children = event.parentNode.children;

  for (var child in children) {
    if (children[child].classList) {
      children[child].classList.remove("active-footer-link");
    }
  }
  event.classList.add("active-footer-link");
}
