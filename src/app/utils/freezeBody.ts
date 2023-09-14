export const freezeBody = (pathname: string) => {
  if (pathname !== "/manifesto") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
