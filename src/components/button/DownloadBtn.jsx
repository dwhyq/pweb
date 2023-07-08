import PropTypes from "prop-types";

const DownloadBtn = ({ fileUrl, fileName }) => {
  return (
    <a href={fileUrl} download={fileName}>
      <button className="bg-orange-500 hover:text-orange-500 active:bg-orange-500 hover:bg-white  text-white font-bold py-2 px-4 rounded">
        Download CV
      </button>
    </a>
  );
};

DownloadBtn.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};

export default DownloadBtn;
