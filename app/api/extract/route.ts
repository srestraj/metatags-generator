import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";
import Error from "next/error";

type MetaTagProps = {
  name?: string | null;
  property?: string | null;
  content: string | null;
};

type NextApiResponse<T> = {
  status: (code: number) => NextApiResponse<T>;
  json: (data: T) => void;
};

export async function GET(
  request: {
    url: string;
  },
  res: NextApiResponse<MetaTagProps[]>
) {
  const url = request.url;
  const { searchParams } = new URL(url);
  const query: string | null = searchParams.get('url')

  if (!url || query === null) {
    return NextResponse.json(
      {
        error: {
          message: "URL parameter is missing",
        },
      },
      { status: 400 }
    );
  }

  try {
    // Fetch the web page content
    const response = await fetch(query);
    if (!response.ok) {
      return NextResponse.json(
        {
          error: {
            message: "Failed to fetch the webpage"
          },
        },
        {
          status: response.status
        }
      )
    }

    const html = await response.text();

    // Parse the HTML content with JSDOM
    const { window } = new JSDOM(html);
    const title = window.document.querySelector("title");
    const metaTags = window.document.querySelectorAll("meta");

    const metaTagsOutput: MetaTagProps[] = [];
    metaTagsOutput.push({ name: "title", content: title ? title.text : '' })
    metaTags.forEach((tag: Element) => {
      const name = tag.getAttribute("name");
      const property = tag.getAttribute("property");
      const content = tag.getAttribute("content");
      if (name || property) {
        metaTagsOutput.push({ name: name || property, content });
      }
    });

    return NextResponse.json(metaTagsOutput);
  } catch (error: unknown) {
    let customErrorMessage;
    let errorCode;

    if (error instanceof TypeError && error.message.includes('Invalid URL')) {
      customErrorMessage = 'Invalid URL parameter';
      errorCode = 'ERR_INVALID_URL';
    } else {
      customErrorMessage = 'An error occurred while fetching and parsing the web page';
      errorCode = 'ERR_SERVER_ERROR';
    }

    return NextResponse.json(
      {
        error: {
          code: errorCode,
          message: customErrorMessage,
        },
      },
      { status: 400 }
    );
  }
}
