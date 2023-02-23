import validate from "../validate";

function validateHandle(options, firstRun) {
  let output;

  // Check error
  if (
    options.some((option) => {
      return option.ref.message.innerText !== "";
    })
  ) {
    return;
  }

  function handle(option) {
    const ref = option.ref;
    const input = ref.input;
    const message = ref.message;
    const result = validate(option.type, option.rules, input.value);

    message.innerText = result.message;
    if (result.message === "") {
      input.style.borderColor = "var(--gray)";
      const value = input.value.toString().trim();
      return {
        [option.type]: option.type === "email" ? value.toLowerCase() : value,
      };
    } else {
      input.style.borderColor = "var(--primary)";
    }
  }

  // Validate all
  output = options.reduce((acc, option) => {
    return { ...acc, ...handle(option) };
  }, {});

  // Add event handle
  if (firstRun.current) {
    firstRun.current = false;

    for (const option of options) {
      option.ref.input.oninput = () => {
        output = handle(option);
      };
    }
  }

  if (Object.values(output).length === options.length) {
    return output;
  }
}

export default validateHandle;
