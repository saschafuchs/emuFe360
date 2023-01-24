/**
	* Validates email address using a regular expression.
	*/
export const validateEmail = (email: string): boolean => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

/**
* Validate url using a regular expression.
*/
export const validateUrl = (url: string): boolean => {
	const re = /^(http|https):\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/
	return re.test(String(url).toLowerCase())
}

/**
* Validate the minimum length of a string.
*/
export const validateMinLength = (value: string, length: number): boolean => {
	return value.length >= length
}

/**
* Validates the length of the string is less than or equal to the specified length.
*/
export const validateMaxLength = (value: string, length: number): boolean => {
	return value.length <= length
}

/**
* Validates if the given value has a length between the given minimum and maximum.
*/
export const validateBetweenLength = (value: string, min: number, max: number): boolean => {
	return value.length >= min && value.length <= max
}

/**
* A function to validate password quality.
*/
export const validatePasswordQuality = (value: string, min = 8, max = 30): boolean => {
	const re = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{${min},${max}}$`
	return new RegExp(re).test(value)
}
