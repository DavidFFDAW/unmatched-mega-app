import html2canvas from 'html2canvas';

function getScreenshotOfElement(element: HTMLElement, posX: any, posY: any, width: any, height: any, callback: any) {
    html2canvas(element, {
        onrendered: function (canvas) {
            var context = canvas.getContext('2d');
            var imageData = context.getImageData(posX, posY, width, height).data;
            var outputCanvas = document.createElement('canvas');
            var outputContext = outputCanvas.getContext('2d');
            outputCanvas.width = width;
            outputCanvas.height = height;

            var idata = outputContext.createImageData(width, height);
            idata.data.set(imageData);
            outputContext.putImageData(idata, 0, 0);
            callback(outputCanvas.toDataURL().replace('data:image/png;base64,', ''));
        },
        width: width,
        height: height,
        useCORS: true,
        taintTest: false,
        allowTaint: false,
    });
}
