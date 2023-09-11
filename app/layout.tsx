import Sidebar from "@/components/sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProviders";
import UserProvider from "@/providers/user_provider";
import ModelProvider from "@/providers/Modal_Provider";
import ToasterProvider from "@/providers/toaster_provider";
import ModalProvider from "@/providers/Modal_Provider";
import getSongsbyUserId from "@/actions/getSongs_by_userid";
import { revalidatePath } from "next/cache";
import Player from "@/components/player";
import getActiveProductWithPrices from "@/actions/getActiveProductWithPrices";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to Music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsbyUserId();
  const products = await getActiveProductWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
