import Parser from "@/node_modules/rss-parser/index";

export interface NoteArticle {
  title: string;
  link: string;
  thumbnail: string;
  date: string;
}

export async function fetchNoteArticles(): Promise<NoteArticle[]> {
  try {
    const parser = new Parser({
      customFields: {
        item: ["media:thumbnail"],
      },
    });
    const feed = await parser.parseURL("https://note.com/miyu_003d26/rss");

    const filteredArticles = feed.items
      .filter((item) => !item.title?.includes("デザイン記録"))
      .map((item) => ({
        title: item.title ?? "No Title",
        link: item.link ?? "#",
        thumbnail: item["media:thumbnail"] ?? "",
        date: item.pubDate ?? "",
      }));

    const sortedArticles = filteredArticles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

    return sortedArticles;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return [];
  }
}
