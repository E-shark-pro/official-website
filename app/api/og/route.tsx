// app/api/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const title = searchParams.get("title") || "E Shark";
	const description =
		searchParams.get("description") || "Where teaching is limitless";

	// Get your base URL dynamically
	const baseUrl = process.env.WEBSITE_URL;

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					flexWrap: "nowrap",
					backgroundColor: "white",
					backgroundImage:
						"radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
					backgroundSize: "100px 100px",
				}}>
				<img
					src={`${baseUrl}/apple-icon-180x180.png`} // ✅ absolute path to public asset
					width={250}
					height={250}
					// style={{ marginBottom: "20px" }}
					// style={{ margin: "0 75px" }}
				/>
				<div
					style={{
						display: "flex",
						fontSize: 10,
						fontStyle: "normal",
						color: "black",
						// marginTop: 10,
						lineHeight: 1.8,
						whiteSpace: "pre-wrap",
					}}></div>
				<div style={{ fontSize: 60, fontWeight: "bold" }}>{title}</div>
				<div style={{ fontSize: 40, color: "gray" }}>{description}</div>
			</div>
		),
		{ width: 1200, height: 630 }
	);
}
