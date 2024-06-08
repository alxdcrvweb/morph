import { ImageResponse } from "next/og";
// import {  } from "../../public/";
export const runtime = "experimental-edge";

// const getFont = async (url: string) => {
//   try {
//     const response = await fetch(new URL(url, import.meta.url));
//     if (!response.ok) {
//       throw new Error(`Failed to fetch font from ${url}`);
//     }
//     return await response.arrayBuffer();
//   } catch (error:any) {
//     console.error(error);
//     throw new Error(`Error fetching font: ${error.message}`);
//   }
// }
export default async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = "Morpheus #" + id;
  // const time = searchParams.get("time");
  const frame = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "auto",
    backgroundImage: `url(http://localhost:3000/morphBg.png)`,
    width: "1331px",
    height: "1331px",
  };
  try {
    // const fonts = [
    //   {
    //     name: "Nostra",
    //     data: await getNostra(),
    //     style: "normal",
    //     weight: 400,
    //   },
    //   {
    //     name: "ApocLC",
    //     data: await getApocLC(),
    //     style: "normal",
    //     weight: 400,
    //   },
    // ];

    return new ImageResponse(
      (
        <div style={frame}>
          <div
            style={{
              fontFamily: "ApocLCLight",
              fontStyle: "italic",
              fontSize: "38px",
              color: "white",
              transform:
                "rotate(-90deg) translateY(-600px) translateX(-1100px)",
            }}
          >
            {name}
          </div>
          {/* <div
            style={{
              display: "flex",
              fontFamily: "ApocLC",
              fontSize: "122px",
              color: "white",
            }}
          >
            {time}
          </div> */}
          <img
            src={`https://www.mrphs.io/api/getNftById?id=${id}`}
            width={1100}
            height={1231}
            style={{ marginLeft: "35px", objectFit: "contain" }}
          />
          {/* <div style={img}>123123</div> */}
        </div>
      ),
      {
        width: 1331,
        height: 1331,
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response("Error generating image", { status: 500 });
  }
}
