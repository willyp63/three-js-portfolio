const LaptopUI = () => {
  return (
    <div
      style={{
        width: "80vw",
        maxWidth: 400,
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
      }}
    >
      <FolderButton
        href="https://github.com/willyp63"
        imageUrl="/imgs/github.png"
        text="GITHUB"
      />
      <FolderButton
        href="https://www.linkedin.com/in/wilpirino"
        imageUrl="/imgs/linkedin.png"
        text="LINKEDIN"
      />
      <FolderButton comingSoon imageUrl="/imgs/notes.png" text="BLOG" />
      <FolderButton
        href="/resume.pdf"
        imageUrl="/imgs/file-icon.png"
        text="RESUME"
      />
      <FolderButton
        comingSoon
        imageUrl="/imgs/folder-icon.png"
        text="PROJECTS"
      />
    </div>
  );
};

const FolderButton = ({ comingSoon = false, imageUrl, text, href }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    href={comingSoon ? "#" : href}
    target={comingSoon ? "_self" : "_blank"}
    rel="noreferrer"
    style={{
      margin: 16,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      border: "none",
      backgroundColor: "transparent",
      alignItems: "center",
      pointerEvents: "all",
      textAlign: "center",
      textDecoration: "none",
      cursor: comingSoon ? "not-allowed" : "pointer",
      opacity: comingSoon ? 0.5 : 1,
    }}
  >
    {comingSoon && (
      <div
        className="absolute top-0 right-0 text-xxs text-white bg-red-600 w-24 rounded-full p-1"
        style={{ transform: "translateX(60%)" }}
      >
        COMING SOON
      </div>
    )}
    <img alt="" src={imageUrl} style={{ width: 80 }} />
    <div
      style={{
        marginTop: 4,
        fontWeight: "bold",
        textTransform: "uppercase",
        width: 80,
        fontSize: 12,
        lineHeight: 1.35,
        color: "#fff",
      }}
    >
      {text}
    </div>
  </a>
);

export default LaptopUI;
