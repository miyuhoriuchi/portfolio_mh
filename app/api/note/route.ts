import { NextResponse } from "@/node_modules/next/server";
import { fetchNoteArticles } from "@/app/_libs/note";

export async function GET() {
  try {
    const articles = await fetchNoteArticles();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json([], { status: 500 });
  }
}
