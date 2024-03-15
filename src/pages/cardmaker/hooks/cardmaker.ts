export const getBackgroundS = (s: string) => {
	if (s === 'center') return 0;
	return Number(s.replace('px', '').replace('%', ''));
};

export const getMovement = (movement: number) => {
	if (movement === 0) return 1;
	return movement;
};

// export const mouseOver = (imageContainer: HTMLDivElement) => {
//     const dragging = get(isDragging);

//     return (e: MouseEvent) => {
//         e.preventDefault();
//         console.log({
//             dragging,
//             bounding: imageContainer.getBoundingClientRect(),
//         });

//         if (dragging) {
//             // move background image within container with mouse but not to mouse coords

//             console.log(' +--------------------COSA---------------------+');

//             const { clientX, clientY } = e as MouseEvent;
//             const { top, left, width, height } = imageContainer.getBoundingClientRect();
//             const currentPosition = {
//                 x: getBackgroundS(imageContainer.style.backgroundPositionX),
//                 y: getBackgroundS(imageContainer.style.backgroundPositionY),
//             };

//             console.log({
//                 movementX: e.movementX,
//                 movementY: e.movementY,
//             });

//             const summedX = currentPosition.x + e.movementX * clientX;
//             const summedY = currentPosition.y + e.movementY * clientY;

//             imageContainer.style.backgroundPositionX = `${summedX}px`;
//             imageContainer.style.backgroundPositionY = `${summedY}px`;

//             console.log(' +---------------------------------------------+');
//         }
//     };
// };
