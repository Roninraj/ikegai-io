export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout">
      <main className="auth-main">
        {children}
      </main>
    </div>
  );
}
