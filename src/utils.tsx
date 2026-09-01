import { Project, Experience } from './types';

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

/** Turns a string into a URL-safe slug, e.g. "Mask R-CNN Greeny" -> "mask-r-cnn-greeny" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Stable slug for a project's detail page URL, e.g. /projects/distributed-risk-management-system */
export function getProjectSlug(project: Project): string {
  return slugify(project.title);
}

/** Stable slug for an experience entry's detail page URL. Combines title + company
 *  since job titles (e.g. "Software Development Intern") can repeat across companies. */
export function getExperienceSlug(exp: Experience): string {
  return slugify(`${exp.title}-${exp.company}`);
}
