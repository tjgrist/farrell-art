import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import getContentFromS3 from "../lib/getContentFromS3";
import addBottomMarginToParagraph from "../lib/addBottomMarginToParagraph";

export default async function Content({fileName, headerText}) {
  const content = await getContentFromS3(fileName);

  if (!content) {
    return <div>Failed to load content</div>;
  }

  // Configure marked to use GitHub Flavored Markdown
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  const rawHtml = marked(content);
  const sanitizedHtml = DOMPurify.sanitize(addBottomMarginToParagraph(rawHtml));

  return (
    <main className="min-h-screen py-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{headerText}</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg">
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>
    </main>
  );
}
