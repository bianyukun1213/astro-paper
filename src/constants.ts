import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import { useTranslations, type Locale } from "@/utils/locale";
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
      name: t.social_name_github(),
      href: "https://github.com/satnaing/astro-paper",
      linkTitle: t.social_on_github({ title: t.site_title() }),
      icon: IconGitHub,
    },
    {
      name: t.social_name_x(),
      href: "https://x.com/username",
      linkTitle: t.social_on_x({ title: t.site_title() }),
      icon: IconBrandX,
    },
    {
      name: t.social_name_linkedin(),
      href: "https://www.linkedin.com/in/username/",
      linkTitle: t.social_on_linkedin({ title: t.site_title() }),
      icon: IconLinkedin,
    },
    {
      name: t.social_name_mail(),
      href: "mailto:yourmail@gmail.com",
      linkTitle: t.social_send_email({ title: t.site_title() }),
      icon: IconMail,
    },
  ];
}

export function getLocalizedShareLinks(locale: Locale): Social[] {
  const t = useTranslations(locale);
  return [
    {
      name: t.share_name_whatsapp(),
      href: "https://wa.me/?text=",
      linkTitle: t.share_via_whatsapp(),
      icon: IconWhatsapp,
    },
    {
      name: t.share_name_facebook(),
      href: "https://www.facebook.com/sharer.php?u=",
      linkTitle: t.share_on_facebook(),
      icon: IconFacebook,
    },
    {
      name: t.share_name_x(),
      href: "https://x.com/intent/post?url=",
      linkTitle: t.share_on_x(),
      icon: IconBrandX,
    },
    {
      name: t.share_name_telegram(),
      href: "https://t.me/share/url?url=",
      linkTitle: t.share_via_telegram(),
      icon: IconTelegram,
    },
    {
      name: t.share_name_pinterest(),
      href: "https://pinterest.com/pin/create/button/?url=",
      linkTitle: t.share_on_pinterest(),
      icon: IconPinterest,
    },
    {
      name: t.share_name_mail(),
      href: "mailto:?subject=See%20this%20post&body=",
      linkTitle: t.share_via_email(),
      icon: IconMail,
    },
  ];
}
