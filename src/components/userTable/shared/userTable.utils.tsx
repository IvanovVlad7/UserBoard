export const highlightText = (text: string, highlight: string) => {
  if (!highlight.trim()) return text;

  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedHighlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="highlight">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
};
