import qs from 'qs';
import { Linking, Platform } from 'react-native';

export const openLink = (link) => {
    switch (true) {
        case link.indexOf('facebook.com/profile') !== -1:
            {
                const url = qs.parse(link);
                let keys = Object.keys(url);
                const scheme = Platform.select({
                    ios: 'fb://profile/' + url[keys[0]],
                    android: 'fb://page/' + url[keys[0]],
                });
                Linking.canOpenURL(scheme).then((supported) => {
                    if (supported) {
                        Linking.openURL(scheme);
                    } else {
                        Linking.openURL(link);
                    }
                });
            }
            return;
        default:
            Linking.openURL(link);
            return;
    }
};
