/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Month_5Inputs */

const en_us2_month_5 = /** @type {(inputs: Month_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`May`)
};

const zh_cn2_month_5 = /** @type {(inputs: Month_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`五月`)
};

const ru_ru2_month_5 = /** @type {(inputs: Month_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Май`)
};

/**
* | output |
* | --- |
* | "May" |
*
* @param {Month_5Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const month_5 = /** @type {((inputs?: Month_5Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Month_5Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_month_5(inputs)
	if (locale === "zh-CN") return zh_cn2_month_5(inputs)
	return ru_ru2_month_5(inputs)
});