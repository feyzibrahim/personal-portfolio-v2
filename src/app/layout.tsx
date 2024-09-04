import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Settings } from "lucide-react";
import LeftHanger from "@/components/left-hanger";
import RightHanger from "@/components/right-hanger";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Feyz Ibrahim",
	description: "Feyz Ibrahim Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<>
						<div className="w-full h-10 bg-background-secondary flex items-center gap-2 justify-center text-white">
							<Settings className="w-4 h-4 animate-spin" />
							<p className="text-xs">Development in progress</p>
						</div>
						<Navbar />
						<LeftHanger />
						<RightHanger />

						{children}
						<Footer />
					</>
				</ThemeProvider>
			</body>
		</html>
	);
}
