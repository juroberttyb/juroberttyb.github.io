import React from 'react';
import './download.css'

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    // Constructing a temporary HTML link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // https://drive.google.com/file/d/1DLsiRciS_a5cVYlwSUcdw8flHrMMgp_b/view?usp=drive_link
    // <button id='download_button' onClick={handleDownload} className='button'>
    //     {fileName}
    // </button>
    <div id="download_links">
      <a href="https://www.dropbox.com/scl/fi/ornw60wyiz01hcm5v2zvc/ohana.zip?rlkey=oilrmjywxxk7x1vjsrsgfp15x&st=0y6i7w1s&dl=1" download="ohana.zip" id='download_button' className='button'>
      Windows用戶 - 下載Ohana！
      </a>
      <a href="https://www.dropbox.com/scl/fi/37eaakeatxcgrr2gl5jam/ohana-ubuntu.zip?rlkey=engem7iaoul1q0fgti61e8qu6&st=nlbec323&dl=1" download="ohana.zip" id='download_button' className='button'>
      Mac用戶 - 下載Ohana！
      </a>
      <a href="https://www.dropbox.com/scl/fi/37eaakeatxcgrr2gl5jam/ohana-ubuntu.zip?rlkey=engem7iaoul1q0fgti61e8qu6&st=nlbec323&dl=1" download="ohana.zip" id='download_button' className='button'>
      Ubuntu用戶 - 下載Ohana！
      </a>
    </div>
  );
};

export default DownloadButton;
