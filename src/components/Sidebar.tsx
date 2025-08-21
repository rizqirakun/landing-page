import { useState } from "react";
import IonChevronDown from "virtual:icons/ion/chevron-down";
import IonMailOutline from "virtual:icons/ion/mail-outline";
import IonPhonePortraitOutline from "virtual:icons/ion/phone-portrait-outline";
import IonCalendarOutline from "virtual:icons/ion/calendar-outline";
import IonLocationOutline from "virtual:icons/ion/location-outline";
import IonLogoFacebook from "virtual:icons/ion/logo-facebook";
import IonLogoTwitter from "virtual:icons/ion/logo-twitter";
import IonLogoInstagram from "virtual:icons/ion/logo-instagram";
import IonLogoGithub from "virtual:icons/ion/logo-github";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      data-sidebar
      data-active={open}
      className="bg-[#1f1f1f] border border-[#383838] rounded-2xl p-4 shadow-md mb-4
                 max-h-[112px] overflow-hidden transition-all duration-500 ease-in-out
                 data-[active=true]:max-h-[405px]"
    >
      {/* Top row */}
      <div className="relative flex items-center gap-4">
        <figure className="bg-gradient-to-br from-[#3f3f3f] to-[#2f2f2f] rounded-2xl">
          <img
            src="/images/my-avatar.png"
            alt="Richard hanrick"
            width={80}
            className="rounded-2xl"
          />
        </figure>

        <div>
          <h1 className="text-white text-[17px] font-medium tracking-tight mb-2">
            Richard hanrick
          </h1>
          <p className="text-white bg-[#212121] text-[11px] font-light px-3 py-1 rounded-md">
            Web developer
          </p>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="absolute -top-4 -right-4 rounded-tr-2xl rounded-bl-2xl
                     text-[13px] text-yellow-400 bg-gradient-to-br from-[#3f3f3f] to-[#2f2f2f]
                     p-2.5 shadow-md transition hover:from-yellow-300 hover:to-yellow-200"
          aria-expanded={open}
        >
          {/* <span className="hidden sm:inline text-xs">Show Contacts</span> */}
          <span className="sm:hidden inline-flex">
            <IonChevronDown className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Expanded content */}
      <div
        className="opacity-0 invisible transition-opacity duration-500 ease-in-out
                   data-[active=true]:opacity-100 data-[active=true]:visible"
        data-active={open}
      >
        <div className="w-full h-px bg-[#383838] my-4" />

        <ul className="grid gap-4">
          <li className="flex items-center gap-4">
            <div
              className="relative w-8 h-8 flex items-center justify-center
                            rounded-md bg-gradient-to-br from-[#3f3f3f] to-[#2f2f2f]
                            text-yellow-400 shadow-md"
            >
               <IonMailOutline className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-46px)]">
              <p className="text-gray-400 text-[11px] uppercase mb-0.5">
                Email
              </p>
              <a
                href="mailto:richard@example.com"
                className="text-white text-sm"
              >
                richard@example.com
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div
              className="relative w-8 h-8 flex items-center justify-center rounded-md
                            bg-gradient-to-br from-[#3f3f3f] to-[#2f2f2f] text-yellow-400 shadow-md"
            >
              <IonPhonePortraitOutline className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-46px)]">
              <p className="text-gray-400 text-[11px] uppercase mb-0.5">
                Phone
              </p>
              <a href="tel:+12133522795" className="text-white text-sm">
                +1 (213) 352-2795
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div
              className="relative w-8 h-8 flex items-center justify-center rounded-md
                            bg-gradient-to-br from-[#3f3f3f] to-[#2f2f2f] text-yellow-400 shadow-md"
            >
              <IonCalendarOutline className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-46px)]">
              <p className="text-gray-400 text-[11px] uppercase mb-0.5">
                Birthday
              </p>
              <time dateTime="1982-06-23" className="text-white text-sm">
                June 23, 1982
              </time>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div
              className="relative w-8 h-8 flex items-center justify-center rounded-md
                            bg-gradient-to-br from-[#3f3f3f] to-[#2f2f2f] text-yellow-400 shadow-md"
            >
              <IonLocationOutline className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-46px)]">
              <p className="text-gray-400 text-[11px] uppercase mb-0.5">
                Location
              </p>
              <address className="not-italic text-white text-sm">
                Sacramento, California, USA
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-px bg-[#383838] my-4" />

        <ul className="flex gap-4 pl-2 pb-1">
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-lg">
              <IonLogoFacebook className="text-lg" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-lg">
              <IonLogoTwitter className="text-lg" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-lg">
              <IonLogoInstagram className="text-lg" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-lg">
              <IonLogoGithub className="text-lg" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
