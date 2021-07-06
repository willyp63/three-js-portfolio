const ResumeUI = () => {
  return (
    <div className="py-4 px-2 sm:py-6 sm:px-3 md:py-8 md:px-4 ui-bg">
      <h1 className="ui-h1 text-center my-4 sm:my-6 md:my-8">RESUME / CV</h1>
      <h3 className="ui-h3 text-center my-2 sm:my-6 md:my-4">Take a Copy!</h3>
      <div className="flex flex-col sm:flex-row">
        <div className="m-4 mb-0 sm:m-6 md:m-8">
          <a
            href="/resume.pdf"
            target="_blank"
            className="ui-btn ui-btn-primary ui-btn-xl"
          >
            OPEN
          </a>
        </div>
        <div className="m-4 sm:m-6 md:m-8">
          <a
            href="/resume.pdf"
            download
            className="ui-btn ui-btn-secondary ui-btn-xl"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeUI;
