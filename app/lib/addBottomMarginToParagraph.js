export default function addBottomMarginToParagraph(html) {
    return html.replace(/<\/p>/g, '</p><div class="mb-4"></div>');
}