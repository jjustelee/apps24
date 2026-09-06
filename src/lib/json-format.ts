export function formatJsonText(input: string) {
  JSON.parse(input);
  // Format tokens instead of re-serializing parsed values, which can round large numbers.
  const tokens = input.match(/"(?:\\.|[^"\\])*"|[^\s]/g) ?? [];
  const output: string[] = [];
  let depth = 0;
  const newline = () => output.push("\n", "  ".repeat(depth));
  tokens.forEach((token, index) => {
    if (token === "{" || token === "[") {
      output.push(token);
      depth++;
      if (tokens[index + 1] !== "}" && tokens[index + 1] !== "]") newline();
    } else if (token === "}" || token === "]") {
      depth--;
      if (tokens[index - 1] !== "{" && tokens[index - 1] !== "[") newline();
      output.push(token);
    } else if (token === ",") {
      output.push(token);
      newline();
    } else {
      output.push(token === ":" ? ": " : token);
    }
  });
  return output.join("");
}
