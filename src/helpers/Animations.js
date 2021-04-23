import React from 'react'
import { Animated } from 'react-native'

const AnimateOption = (startValue, endValue, options = {}) => {
	let param = new Animated.Value(startValue)

	Animated.timing(param, {
		toValue: endValue,
		...options,
	}).start()

	return param
}

export default AnimateOption;
