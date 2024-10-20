/*
npm install --save-dev jest-extended
 */
import {CountriesPrefix} from '../src/CountriesPrefix'

let country = new CountriesPrefix()
let estoniaGeneratedValue: string, latviaGeneratedValue: string, lithuaniaGeneratedValue: string

beforeAll(() => {
    estoniaGeneratedValue = country.estoniaPrefixAndNumbers()
    latviaGeneratedValue = country.latviaPrefixAndNumbers()
    lithuaniaGeneratedValue = country.lithuaniaPrefixAndNumbers()
})

describe('Check all functions for prefix', () => {

    test('check prefix for Estonia', () => {
        expect(estoniaGeneratedValue.startsWith('EST-')).toBeTruthy()
    })

    test('check prefix for Latvia', () => {
        expect(latviaGeneratedValue.startsWith('LVA-')).toBeTruthy()
    })

    test('check prefix for Lithuania', () => {
        expect(lithuaniaGeneratedValue.startsWith('LTU-')).toBeTruthy()
    })
})

describe('Check all functions for length of returned values', () => {

    test('check length for Estonia', () => {
        expect(estoniaGeneratedValue).toHaveLength(8)
    })

    test('check length for Latvia', () => {
        expect(latviaGeneratedValue).toHaveLength(8)
    })

    test('check length for Lithuania', () => {
        expect(lithuaniaGeneratedValue).toHaveLength(8)
    })
})

describe('Check all functions for format of returned values', () => {

    test('check format for Estonia', () => {
        expect(/EST-\d{4}/.test(estoniaGeneratedValue)).toBe(true)
    })

    test('check format for Latvia', () => {
        expect(/LVA-\d{4}/.test(latviaGeneratedValue)).toBe(true)
    })

    test('check format for Lithuania', () => {
        expect(/LTU-\d{4}/.test(lithuaniaGeneratedValue)).toBe(true)
    })
})