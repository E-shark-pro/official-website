import { ImageResponse } from "next/og";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image({ searchParams }: any) {
	const title = searchParams?.title || "Default Title";

	// Build the absolute base URL
	const baseUrl = process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: "http://localhost:3001";

	// Fetch logo from /public/logo.png (make sure it's there!)
	const logoRes = await fetch(`${baseUrl}/apple-icon-180x180.png`);
	const logoArrayBuffer = await logoRes.arrayBuffer();

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					background: "linear-gradient(135deg, #0f172a, #1e293b)",
					color: "white",
					fontSize: 64,
					fontWeight: "bold",
					textAlign: "center",
				}}>
				{/* ✅ Logo rendered from ArrayBuffer */}
				<img
					src={logoArrayBuffer as any}
					width={150}
					height={150}
					style={{ marginBottom: "24px", borderRadius: "50%" }}
				/>

				{/* ✅ Dynamic Title */}
				<div>{title}</div>
			</div>
		),
		size
	);
}
