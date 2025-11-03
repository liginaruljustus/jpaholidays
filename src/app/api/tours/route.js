import { NextResponse } from "next/server";
import { kanyakumariData } from "../../../data/kanyakumariData";

export async function GET() {
  const tours = Object.keys(kanyakumariData).map((key) => ({
    slug: key, // example: "Kanyakumari", "Vivekananda-Rock"
    url: kanyakumariData[key].url, // example: "/kanyakumari-tour/Kanyakumari"
  }));

  return NextResponse.json(tours);
}
