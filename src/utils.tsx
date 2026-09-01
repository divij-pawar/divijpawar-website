export function renderBoldMarkup(text: string) {
  // Supports simple **bold** spans inside plain text.
  // Example: "Built **ZeroMQ** pipeline" => "Built " + <strong>ZeroMQ</strong> + " pipeline"
  const nodes: Array<string | JSX.Element> = [];
  let i = 0;
  let key = 0;

  while (i < text.length) {
    const start = text.indexOf("**", i);
    if (start === -1) {
      nodes.push(text.slice(i));
      break;
    }

    if (start > i) nodes.push(text.slice(i, start));

    const end = text.indexOf("**", start + 2);
    if (end === -1) {
      // Unclosed bold marker; treat the rest as plain text.
      nodes.push(text.slice(start));
      break;
    }

    const boldText = text.slice(start + 2, end);
    nodes.push(
      <strong key={`b-${key++}`} className="font-semibold text-gray-100">
        {boldText}
      </strong>,
    );
    i = end + 2;
  }

  return nodes;
}