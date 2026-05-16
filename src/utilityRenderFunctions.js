// some functions to create reusable DOM elements

// give specified text to a general element
const createElement = (elementType, text) => {
  const element = document.createElement(elementType);
  element.textContent = text;

  return element;
};

// Create image and add alt to it
const createImage = (url, alt) => {
  const img = document.createElement("img");

  img.src = url;
  img.alt = alt;

  return img;
};

// give a specified text and data attribute to a header element
const createHeader = (headerType, text, dataCy) => {
  const header = document.createElement(headerType);

  header.textContent = text;
  header.setAttribute("data-cy", dataCy);

  return header;
};

// make element visible or not using a button
const createToggleButton = (text, element) => {
  const button = document.createElement("button");

  button.textContent = text;

  button.addEventListener("click", () => {
    element.classList.toggle("notVisible");
  });

  return button;
};

// create a label element
const createLabel = (text, htmlFor) => {
  const label = document.createElement("label");

  label.textContent = text;
  label.setAttribute("for", htmlFor);

  return label;
};

//  create an input element
const createInput = (name) => {
  const input = document.createElement("input");

  input.name = name;
  input.id = name;

  return input;
};

// create a submit button
const createSubmitButton = (value) => {
  const submit = document.createElement("input");

  submit.type = "submit";
  submit.value = value;

  return submit;
};

export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
};
