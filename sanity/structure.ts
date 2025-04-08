import type { StructureResolver } from "sanity/structure";

import { BookOpen, Pointer, HelpCircle } from "lucide-react";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // S.documentTypeListItem("activity"),
      S.documentTypeListItem("resource"),
      S.documentTypeListItem("training"),
      S.documentTypeListItem("blog"),
      S.divider(),
      // S.documentTypeListItem("gweithgaredd"),
      S.documentTypeListItem("adnodd"),
      S.documentTypeListItem("hyfforddi"),
      S.divider(),
      S.documentTypeListItem("abah"),
      S.documentTypeListItem("movers"),
      S.divider(),
      S.listItem()
        .title("Page Intros")
        .icon(BookOpen)
        .child(
          S.document()
            .schemaType("pageIntro")
            .documentId("pageIntro")
            .title("Page Introductions")
        ),
      S.listItem()
        .title("FAQs")
        .icon(HelpCircle)
        .child(
          S.document().schemaType("faqs").documentId("faqs").title("FAQs")
        ),
      S.listItem()
        .title("App Instructions")
        .icon(Pointer)
        .child(
          S.document()
            .schemaType("instructions")
            .documentId("instructions")
            .title("App Instructions")
        ),
    ]);
