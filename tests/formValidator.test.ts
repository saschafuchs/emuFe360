import { describe, expect, it } from 'vitest'
import * as formValidators from '../utils/formValidators'

describe('Testing Emailvalidator', () => {
	it('email should invalidate', () => {
		const email = 'test'
		expect(formValidators.validateEmail(email)).toEqual(false)
	})
	it('email should validate', () => {
		const email = 'check@this.mail'
		expect(formValidators.validateEmail(email)).toEqual(true)
	})
})

describe('Testing Urlvalidator', () => {
	it('url should invalidate', () => {
		const url = 'test'
		expect(formValidators.validateUrl(url)).toEqual(false)
	})
	it('url should validate', () => {
		const url = 'https://www.google.com'
		expect(formValidators.validateUrl(url)).toEqual(true)
	})
})

describe('Testing MinLengthvalidator', () => {
	it('min length should invalidate', () => {
		const value = 'test'
		const length = 5
		expect(formValidators.validateMinLength(value, length)).toEqual(false)
	})
	it('min length should validate', () => {
		const value = 'test'
		const length = 4
		expect(formValidators.validateMinLength(value, length)).toEqual(true)
	})
})

describe('Testing MaxLengthvalidator', () => {
	it('max length should invalidate', () => {
		const value = 'test'
		const length = 3
		expect(formValidators.validateMaxLength(value, length)).toEqual(false)
	})
	it('max length should validate', () => {
		const value = 'test'
		const length = 4
		expect(formValidators.validateMaxLength(value, length)).toEqual(true)
	})
})

describe('Testing BetweenLengthvalidator', () => {
	it('between length should invalidate', () => {
		const value = 'test'
		const min = 5
		const max = 6
		expect(formValidators.validateBetweenLength(value, min, max)).toEqual(false)
	})
	it('between length should validate', () => {
		const value = 'test'
		const min = 4
		const max = 6
		expect(formValidators.validateBetweenLength(value, min, max)).toEqual(true)
	})
})

describe('Testing PasswordQualityvalidator', () => {
	it('password quality should invalidate', () => {
		const value = 'toshort'
		expect(formValidators.validatePasswordQuality(value)).toEqual(false)
	})
	it('password quality should validate', () => {
		const value = 'va!1dP@ssword'
		expect(formValidators.validatePasswordQuality(value)).toEqual(true)
	})
})
