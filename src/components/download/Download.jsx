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
    <a href="https://www.dropbox.com/scl/fi/ornw60wyiz01hcm5v2zvc/ohana.zip?rlkey=oilrmjywxxk7x1vjsrsgfp15x&st=8rcs4vzn&dl=1" download="ohana.zip" id='download_button' className='button'>
        {fileName}
    </a>
  );
};

export default DownloadButton;
