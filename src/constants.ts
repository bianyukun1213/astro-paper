import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import { useTranslations, type Locale } from "@/utils/locale";
import type { HCard } from "@/utils/types";
import type { Props } from "astro";

export interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export function getLocalizedSocials(locale: Locale): Social[] {
  const t = useTranslations(locale);
  return [
    {
      name: t.term_github(),
      href: "https://github.com/satnaing/astro-paper",
      linkTitle: t.btn_social_title_github(),
      icon: IconGitHub,
    },
    {
      name: t.term_x(),
      href: "https://x.com/username",
      linkTitle: t.btn_social_title_x(),
      icon: IconBrandX,
    },
    {
      name: t.term_linkedin(),
      href: "https://www.linkedin.com/in/username/",
      linkTitle: t.btn_social_title_linkedin(),
      icon: IconLinkedin,
    },
    {
      name: t.term_mail(),
      href: "mailto:yourmail@gmail.com",
      linkTitle: t.btn_social_title_mail(),
      icon: IconMail,
    },
  ];
}

export function getLocalizedShareLinks(locale: Locale): Social[] {
  const t = useTranslations(locale);
  return [
    {
      name: t.term_whatsapp(),
      href: "https://wa.me/?text=",
      linkTitle: t.btn_share_title_whatsapp(),
      icon: IconWhatsapp,
    },
    {
      name: t.term_facebook(),
      href: "https://www.facebook.com/sharer.php?u=",
      linkTitle: t.btn_share_title_facebook(),
      icon: IconFacebook,
    },
    {
      name: t.term_x(),
      href: "https://x.com/intent/post?url=",
      linkTitle: t.btn_share_title_x(),
      icon: IconBrandX,
    },
    {
      name: t.term_telegram(),
      href: "https://t.me/share/url?url=",
      linkTitle: t.btn_share_title_telegram(),
      icon: IconTelegram,
    },
    {
      name: t.term_pinterest(),
      href: "https://pinterest.com/pin/create/button/?url=",
      linkTitle: t.btn_share_title_pinterest(),
      icon: IconPinterest,
    },
    {
      name: t.term_mail(),
      href: "mailto:?subject=See%20this%20post&body=",
      linkTitle: t.btn_share_title_mail(),
      icon: IconMail,
    },
  ];
}

export function getLocalizedHCard(locale: Locale): HCard {
  const t = useTranslations(locale);
  return {
    pName: t.h_card_p_name(),
    uPhoto: t.h_card_u_photo(),
    uUrl: t.h_card_u_url(),
    uEmail: t.h_card_u_email(),
    pNote: t.h_card_p_note(),
  };
}
