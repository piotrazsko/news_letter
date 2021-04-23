import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

let screenWidth = Dimensions.get('window').width;

let screenHeight =
    Platform.OS === 'android'
        ? Dimensions.get('window').height - StatusBar.currentHeight
        : Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent) => {
    const elemWidth = parseFloat(widthPercent);

    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent) => {
    const elemHeight = parseFloat(heightPercent);

    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (that) => {
    Dimensions.addEventListener('change', (newDimensions) => {
        // Retrieve and save new dimensions
        screenWidth = newDimensions.window.width;
        screenHeight = newDimensions.window.height;

        that.setState({
            orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
        });
    });
};

const removeOrientationListener = () => {
    Dimensions.removeEventListener('change', () => {});
};

export {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange,
    removeOrientationListener,
};
