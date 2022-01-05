# BlueRush® IndiVideo Dynamic Communication Component

This Dynamic Communication (DC) component provides a basic example of how [BlueRush](https://www.bluerush.com/individeo)'s IndiVideo personalized video platform can be integrated with [Quadient](https://www.quadient.com/intelligent-communication/customer-communications/inspire-flex)'s Inspire Designer and DC output.

## Getting Started

### Prerequisite

- Quadient® Inspire Designer R12 (or higher) installed

### Installation and Usage

- Clone this repository into the `${INSPIRE-ROOT}/DCComponents/Components` directory [1]

  ```console
  > git clone https://github.com/robertwtucker/bluerush-individeo-component.git
  ```

- Open Designer or, if currently open, close and re-open it

- Create a new workflow with a Dynamic Communication (DC) or, if you already have a DC you want to use the component with, open the proper WFD

- In the _Components_ panel, choose **Media** from the _Category_ drop-down list box

- Drag and drop the **IndiVideo Personalized Video** component from the _Components_ panel to the appropriate location/container in your DC

- Map variables and/or static content, as appropriate, in the _Properties_ panel. Specific values to use will be provided to you by BlueRush

> **Note**: The [Chromium](https://www.chromium.org/Home) browser engine used by Designer for proofing does not include a license for playing audio and video in the MPEG format. To see the video play in your DC while proofing, launch an external browser from the toolbar in the proofing window.

## License

Copyright (c) 2020 Quadient Group AG and distributed under the MIT License. See `LICENSE` for more information.

## Contact

Robert Tucker - [@robertwtucker](https://twitter.com/robertwtucker)

Project Link: [https://github.com/robertwtucker/bluerush-individeo-component](https://github.com/robertwtucker/bluerush-individeo-component)

[1]: For Quadient customers with access, a downloadable ZIP file with the files maintained here is available from [Quadient University Exchange](https://university.quadient.com/c/portal/exchange/find_exchange?resourcePrimKey=28531327). This file can be unzipped to the directory in step one instead of using Git.
