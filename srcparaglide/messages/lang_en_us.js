/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Lang_En_UsInputs */

const en_us2_lang_en_us = /** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`English`)
};

/** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */
const zh_cn2_lang_en_us = en_us2_lang_en_us;

/** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */
const ru_ru2_lang_en_us = en_us2_lang_en_us;

/**
* | output |
* | --- |
* | "English" |
*
* @param {Lang_En_UsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const lang_en_us = /** @type {((inputs?: Lang_En_UsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_En_UsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_lang_en_us(inputs)
	if (locale === "zh-CN") return zh_cn2_lang_en_us(inputs)
	return ru_ru2_lang_en_us(inputs)
});