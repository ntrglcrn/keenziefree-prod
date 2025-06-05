export const metadata = {
  title: "Главная",
  description: "Описание сайта",
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="ru"><body>{children}</body></html>;
}
