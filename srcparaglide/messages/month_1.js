/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Month_1Inputs */

const en_us2_month_1 = /** @type {(inputs: Month_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`January`)
};

const zh_cn2_month_1 = /** @type {(inputs: Month_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一月`)
};

const ru_ru2_month_1 = /** @type {(inputs: Month_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Январь`)
};

/**
* | output |
* | --- |
* | "January" |
*
* @param {Month_1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const month_1 = /** @type {((inputs?: Month_1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Month_1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_month_1(inputs)
	if (locale === "zh-CN") return zh_cn2_month_1(inputs)
	return ru_ru2_month_1(inputs)
});