type PageLayoutProps = {
  isHannah: boolean;
  children: React.ReactNode;
};

const PageLayout = ({ isHannah, children }: PageLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingTop: "10vh",

        // margin: "1rem",
      }}
      className={isHannah ? "hannah" : ""}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          height: "100%",
          padding: "2rem",
          margin: "1rem",
          borderRadius: "1rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
