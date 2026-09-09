interface Props {
  content: string;
}

export default function ArticleBody({
  content,
}: Props) {

  const paragraphs = content
    .split("\n")
    .filter((p) => p.trim() !== "");

  return (
    <article
      className="
        prose
        prose-lg
        max-w-none
        mt-10
        prose-headings:font-bold
        prose-headings:text-gray-900
        prose-p:text-gray-700
        prose-p:leading-9
        prose-p:mb-6
        prose-a:text-red-600
        prose-a:no-underline
        hover:prose-a:underline
        prose-strong:text-black
        prose-img:rounded-2xl
        prose-img:shadow-lg
        prose-blockquote:border-red-600
        prose-blockquote:text-gray-600
        prose-ul:list-disc
        prose-ol:list-decimal
      "
    >
      {paragraphs.map((paragraph, index) => {
        const text = paragraph.trim();

        if (text.startsWith("# ")) {
          return (
            <h2 key={index}>
              {text.replace("# ", "")}
            </h2>
          );
        }

        if (text.startsWith("## ")) {
          return (
            <h3 key={index}>
              {text.replace("## ", "")}
            </h3>
          );
        }

        if (text.startsWith("> ")) {
          return (
            <blockquote key={index}>
              {text.replace("> ", "")}
            </blockquote>
          );
        }

        if (text.startsWith("- ")) {
          return (
            <ul key={index}>
              <li>{text.replace("- ", "")}</li>
            </ul>
          );
        }

        if (/^\d+\./.test(text)) {
          return (
            <ol key={index}>
              <li>{text.replace(/^\d+\.\s*/, "")}</li>
            </ol>
          );
        }

        return (
          <p key={index}>
            {text}
          </p>
        );
      })}
    </article>
  );
}