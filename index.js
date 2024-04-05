// Function to check if element is in viewport
const isInViewPort = (elem) => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Debounce a function call
const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

// Get all the products
const blocks = document.querySelectorAll(".block");

// Function which will make the API call
const getBlocks = function () {
  blocks.forEach((block) => {
    if (isInViewPort(block)) {
      console.log(block.innerText);
    }
  });
  console.log(" ");
};

// Assign the event listener
window.addEventListener("scroll", debounce(getBlocks, 1000), false);
