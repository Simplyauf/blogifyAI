import React from "react";
import Logo from "@/assets/Logo.svg";
import DownArrow from "@/assets/DownArrow.svg";
import DashboardIcon from "@/assets/dashboard.svg";
import { useRouter } from "next/router";
import Search from "@/assets/search 03.svg";
import Notification from "@/assets/notification.svg";
import Userpic from "@/assets/Userpic.svg";
import FileIcon from "@/assets/file2.svg";
import { Provider } from "react-redux";
import EntireAppLayout from "../utils/entireAppLayout";
import { ProtectRoute } from "../utils/protectedLayout";
import { store } from "../redux/store";

interface PropType {
  children: React.ReactNode;
}

const BuilderLayout = ({ children }: PropType) => {
  const router = useRouter();
  const { pathname } = router;

  const SidebarValues = [
    {
      link: "/builder/settings",
      displayValue: "settings",
      activeLogoImg: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M1.33333 3.99967C1.33333 2.52692 2.52724 1.33301 3.99999 1.33301H12C13.4728 1.33301 14.6667 2.52692 14.6667 3.99967V11.9997C14.6667 13.4724 13.4728 14.6663 12 14.6663H3.99999C2.52724 14.6663 1.33333 13.4724 1.33333 11.9997V3.99967Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4.16699C8.27614 4.16699 8.5 4.39085 8.5 4.66699V11.3337C8.5 11.6098 8.27614 11.8337 8 11.8337C7.72386 11.8337 7.5 11.6098 7.5 11.3337V4.66699C7.5 4.39085 7.72386 4.16699 8 4.16699Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3333 5.5C11.6095 5.5 11.8333 5.72386 11.8333 6V10C11.8333 10.2761 11.6095 10.5 11.3333 10.5C11.0572 10.5 10.8333 10.2761 10.8333 10V6C10.8333 5.72386 11.0572 5.5 11.3333 5.5Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.66667 5.5C4.94281 5.5 5.16667 5.72386 5.16667 6V10C5.16667 10.2761 4.94281 10.5 4.66667 10.5C4.39053 10.5 4.16667 10.2761 4.16667 10V6C4.16667 5.72386 4.39053 5.5 4.66667 5.5Z"
            fill="#03045E"
          />
        </svg>
      ),
      LogoImg: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M1.33333 3.99967C1.33333 2.52692 2.52724 1.33301 3.99999 1.33301H12C13.4728 1.33301 14.6667 2.52692 14.6667 3.99967V11.9997C14.6667 13.4724 13.4728 14.6663 12 14.6663H3.99999C2.52724 14.6663 1.33333 13.4724 1.33333 11.9997V3.99967Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4.16699C8.27614 4.16699 8.5 4.39085 8.5 4.66699V11.3337C8.5 11.6098 8.27614 11.8337 8 11.8337C7.72386 11.8337 7.5 11.6098 7.5 11.3337V4.66699C7.5 4.39085 7.72386 4.16699 8 4.16699Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3333 5.5C11.6095 5.5 11.8333 5.72386 11.8333 6V10C11.8333 10.2761 11.6095 10.5 11.3333 10.5C11.0572 10.5 10.8333 10.2761 10.8333 10V6C10.8333 5.72386 11.0572 5.5 11.3333 5.5Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.66667 5.5C4.94281 5.5 5.16667 5.72386 5.16667 6V10C5.16667 10.2761 4.94281 10.5 4.66667 10.5C4.39053 10.5 4.16667 10.2761 4.16667 10V6C4.16667 5.72386 4.39053 5.5 4.66667 5.5Z"
            fill="#03045E"
          />
        </svg>
      ),
    },
    {
      link: "/builder/pages",
      displayValue: "pages",
      LogoImg: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.3333 5.33301H12V13.333C12 14.0694 12.597 14.6663 13.3333 14.6663C14.0697 14.6663 14.6667 14.0694 14.6667 13.333V6.66634C14.6667 5.92996 14.0697 5.33301 13.3333 5.33301Z"
            fill="#252525"
          />
          <path
            opacity="0.4"
            d="M10 1.33301H3.33334C2.22877 1.33301 1.33334 2.22844 1.33334 3.33301V12.6663C1.33334 13.7709 2.22877 14.6663 3.33334 14.6663H13.3333C12.597 14.6663 12 14.0694 12 13.333V3.33301C12 2.22844 11.1046 1.33301 10 1.33301Z"
            fill="#252525"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 4.66699C3.5 4.39085 3.72386 4.16699 4 4.16699H9.33333C9.60948 4.16699 9.83333 4.39085 9.83333 4.66699C9.83333 4.94313 9.60948 5.16699 9.33333 5.16699H4C3.72386 5.16699 3.5 4.94313 3.5 4.66699Z"
            fill="#252525"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 8C3.5 7.72386 3.72386 7.5 4 7.5L9.33333 7.5C9.60948 7.5 9.83333 7.72386 9.83333 8C9.83333 8.27614 9.60948 8.5 9.33333 8.5L4 8.5C3.72386 8.5 3.5 8.27614 3.5 8Z"
            fill="#252525"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 11.333C3.5 11.0569 3.72386 10.833 4 10.833H6.66667C6.94281 10.833 7.16667 11.0569 7.16667 11.333C7.16667 11.6092 6.94281 11.833 6.66667 11.833H4C3.72386 11.833 3.5 11.6092 3.5 11.333Z"
            fill="#252525"
          />
        </svg>
      ),
      activeLogoImg: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.3333 5.33301H12V13.333C12 14.0694 12.597 14.6663 13.3333 14.6663C14.0697 14.6663 14.6667 14.0694 14.6667 13.333V6.66634C14.6667 5.92996 14.0697 5.33301 13.3333 5.33301Z"
            fill="#03045E"
          />
          <path
            opacity="0.4"
            d="M10 1.33301H3.33334C2.22877 1.33301 1.33334 2.22844 1.33334 3.33301V12.6663C1.33334 13.7709 2.22877 14.6663 3.33334 14.6663H13.3333C12.597 14.6663 12 14.0694 12 13.333V3.33301C12 2.22844 11.1046 1.33301 10 1.33301Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 4.66699C3.5 4.39085 3.72386 4.16699 4 4.16699H9.33333C9.60948 4.16699 9.83333 4.39085 9.83333 4.66699C9.83333 4.94313 9.60948 5.16699 9.33333 5.16699H4C3.72386 5.16699 3.5 4.94313 3.5 4.66699Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 8C3.5 7.72386 3.72386 7.5 4 7.5L9.33333 7.5C9.60948 7.5 9.83333 7.72386 9.83333 8C9.83333 8.27614 9.60948 8.5 9.33333 8.5L4 8.5C3.72386 8.5 3.5 8.27614 3.5 8Z"
            fill="#03045E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 11.333C3.5 11.0569 3.72386 10.833 4 10.833H6.66667C6.94281 10.833 7.16667 11.0569 7.16667 11.333C7.16667 11.6092 6.94281 11.833 6.66667 11.833H4C3.72386 11.833 3.5 11.6092 3.5 11.333Z"
            fill="#03045E"
          />
        </svg>
      ),
    },
    {
      link: "/builder/navbar",
      displayValue: "Navbar",
      LogoImg: (className: string) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2.00031 13C2.00031 13.5523 2.44802 14 3.00031 14H13.0003C13.5526 14 14.0003 13.5523 14.0003 13V5C14.0003 3.34315 12.6572 2 11.0003 2H5.00031C3.34345 2 2.00031 3.34315 2.00031 5V13Z"
            fill="#252525"
          />
          <rect
            width="4.66667"
            height="1.33333"
            rx="0.666667"
            transform="matrix(1 0 0 -1 4.00031 12)"
            fill="#252525"
          />
          <rect
            width="6.66667"
            height="1.33333"
            rx="0.666667"
            transform="matrix(1 0 0 -1 4.00031 9.33301)"
            fill="#252525"
          />
          <rect
            width="8"
            height="2.66667"
            rx="1.33333"
            transform="matrix(1 0 0 -1 4.00031 6.66699)"
            fill="#252525"
          />
        </svg>
      ),
      activeLogoImg: (className: string) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2.00031 13C2.00031 13.5523 2.44802 14 3.00031 14H13.0003C13.5526 14 14.0003 13.5523 14.0003 13V5C14.0003 3.34315 12.6572 2 11.0003 2H5.00031C3.34345 2 2.00031 3.34315 2.00031 5V13Z"
            fill="#03045E"
          />
          <rect
            width="4.66667"
            height="1.33333"
            rx="0.666667"
            transform="matrix(1 0 0 -1 4.00031 12)"
            fill="#03045E"
          />
          <rect
            width="6.66667"
            height="1.33333"
            rx="0.666667"
            transform="matrix(1 0 0 -1 4.00031 9.33301)"
            fill="#03045E"
          />
          <rect
            width="8"
            height="2.66667"
            rx="1.33333"
            transform="matrix(1 0 0 -1 4.00031 6.66699)"
            fill="#03045E"
          />
        </svg>
      ),
    },
    {
      link: "/builder/footer",
      displayValue: "Footer",
      LogoImg: (className: string) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2.00031 3C2.00031 2.44772 2.44802 2 3.00031 2H13.0003C13.5526 2 14.0003 2.44772 14.0003 3V11C14.0003 12.6569 12.6572 14 11.0003 14H5.00031C3.34345 14 2.00031 12.6569 2.00031 11V3Z"
            fill="#252525"
          />
          <rect
            x="4.00031"
            y="4"
            width="4.66667"
            height="1.33333"
            rx="0.666667"
            fill="#252525"
          />
          <rect
            x="4.00031"
            y="6.66699"
            width="6.66667"
            height="1.33333"
            rx="0.666667"
            fill="#252525"
          />
          <rect
            x="4.00031"
            y="9.33301"
            width="8"
            height="2.66667"
            rx="1.33333"
            fill="#252525"
          />
        </svg>
      ),
      activeLogoImg: (className: string) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2.00031 3C2.00031 2.44772 2.44802 2 3.00031 2H13.0003C13.5526 2 14.0003 2.44772 14.0003 3V11C14.0003 12.6569 12.6572 14 11.0003 14H5.00031C3.34345 14 2.00031 12.6569 2.00031 11V3Z"
            fill="#03045E"
          />
          <rect
            x="4.00031"
            y="4"
            width="4.66667"
            height="1.33333"
            rx="0.666667"
            fill="#03045E"
          />
          <rect
            x="4.00031"
            y="6.66699"
            width="6.66667"
            height="1.33333"
            rx="0.666667"
            fill="#03045E"
          />
          <rect
            x="4.00031"
            y="9.33301"
            width="8"
            height="2.66667"
            rx="1.33333"
            fill="#03045E"
          />
        </svg>
      ),
    },
    {
      link: "/builder/design",
      displayValue: "Design",
      LogoImg: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M1.33333 7.99967C1.33333 10.9956 3.30947 13.5299 6.02936 14.3703C7.0847 14.6964 8 13.7709 8 12.6663V10.9626C8 10.1444 8.66328 9.48116 9.48148 9.48116C10.2997 9.48116 10.963 10.1444 10.963 10.9626C10.963 12.3477 12.4234 13.1754 13.2719 12.0807C14.1462 10.953 14.6667 9.5371 14.6667 7.99967C14.6667 4.31778 11.6819 1.33301 8 1.33301C4.3181 1.33301 1.33333 4.31778 1.33333 7.99967Z"
            fill="#252525"
          />
          <path
            d="M7.33333 5C7.33333 4.44772 6.88561 4 6.33333 4C5.78104 4 5.33333 4.44772 5.33333 5C5.33333 5.55228 5.78104 6 6.33333 6C6.88561 6 7.33333 5.55228 7.33333 5Z"
            fill="#252525"
          />
          <path
            d="M12.3333 6.66602C12.3333 6.11373 11.8856 5.66602 11.3333 5.66602C10.781 5.66602 10.3333 6.11373 10.3333 6.66602C10.3333 7.2183 10.781 7.66602 11.3333 7.66602C11.8856 7.66602 12.3333 7.2183 12.3333 6.66602Z"
            fill="#252525"
          />
          <path
            d="M6.33333 10.333C6.33333 9.78072 5.88561 9.33301 5.33333 9.33301C4.78104 9.33301 4.33333 9.78072 4.33333 10.333C4.33333 10.8853 4.78104 11.333 5.33333 11.333C5.88561 11.333 6.33333 10.8853 6.33333 10.333Z"
            fill="#252525"
          />
        </svg>
      ),
      activeLogoImg: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M1.33333 8.00065C1.33333 10.9965 3.30947 13.5309 6.02936 14.3713C7.0847 14.6973 8 13.7719 8 12.6673V10.9636C8 10.1454 8.66328 9.48213 9.48148 9.48213C10.2997 9.48213 10.963 10.1454 10.963 10.9636C10.963 12.3486 12.4234 13.1763 13.2719 12.0817C14.1462 10.954 14.6667 9.53808 14.6667 8.00065C14.6667 4.31875 11.6819 1.33398 8 1.33398C4.3181 1.33398 1.33333 4.31875 1.33333 8.00065Z"
            fill="#03045E"
          />
          <path
            d="M7.33333 5C7.33333 4.44772 6.88561 4 6.33333 4C5.78104 4 5.33333 4.44772 5.33333 5C5.33333 5.55228 5.78104 6 6.33333 6C6.88561 6 7.33333 5.55228 7.33333 5Z"
            fill="#03045E"
          />
          <path
            d="M12.3333 6.66797C12.3333 6.11568 11.8856 5.66797 11.3333 5.66797C10.781 5.66797 10.3333 6.11568 10.3333 6.66797C10.3333 7.22025 10.781 7.66797 11.3333 7.66797C11.8856 7.66797 12.3333 7.22025 12.3333 6.66797Z"
            fill="#03045E"
          />
          <path
            d="M6.33333 10.334C6.33333 9.7817 5.88561 9.33398 5.33333 9.33398C4.78104 9.33398 4.33333 9.7817 4.33333 10.334C4.33333 10.8863 4.78104 11.334 5.33333 11.334C5.88561 11.334 6.33333 10.8863 6.33333 10.334Z"
            fill="#03045E"
          />
        </svg>
      ),
    },
    {
      link: "/builder/options",
      displayValue: "Options",
      LogoImg: (className: string) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.33334 14.5C3.0572 14.5 2.83334 14.2761 2.83334 14L2.83334 8.66667C2.83334 8.39052 3.0572 8.16667 3.33334 8.16667C3.60949 8.16667 3.83334 8.39052 3.83334 8.66667L3.83334 14C3.83334 14.2761 3.60949 14.5 3.33334 14.5Z"
            fill="#252525"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 14.5C7.72386 14.5 7.5 14.2761 7.5 14L7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8L8.5 14C8.5 14.2761 8.27614 14.5 8 14.5Z"
            fill="#252525"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4.5C7.72386 4.5 7.5 4.27614 7.5 4L7.5 2C7.5 1.72386 7.72386 1.5 8 1.5C8.27614 1.5 8.5 1.72386 8.5 2L8.5 4C8.5 4.27614 8.27614 4.5 8 4.5Z"
            fill="#252525"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.33334 7.83301C3.0572 7.83301 2.83334 7.60915 2.83334 7.33301L2.83334 1.99967C2.83334 1.72353 3.0572 1.49967 3.33334 1.49967C3.60949 1.49967 3.83334 1.72353 3.83334 1.99967L3.83334 7.33301C3.83334 7.60915 3.60949 7.83301 3.33334 7.83301Z"
            fill="#252525"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6667 8.5C12.3905 8.5 12.1667 8.27614 12.1667 8L12.1667 2C12.1667 1.72386 12.3905 1.5 12.6667 1.5C12.9428 1.5 13.1667 1.72386 13.1667 2L13.1667 8C13.1667 8.27614 12.9428 8.5 12.6667 8.5Z"
            fill="#252525"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6667 14.5C12.3905 14.5 12.1667 14.2761 12.1667 14L12.1667 12C12.1667 11.7239 12.3905 11.5 12.6667 11.5C12.9428 11.5 13.1667 11.7239 13.1667 12L13.1667 14C13.1667 14.2761 12.9428 14.5 12.6667 14.5Z"
            fill="#252525"
          />
          <circle
            cx="12.6667"
            cy="11.3337"
            r="1.33333"
            transform="rotate(-90 12.6667 11.3337)"
            fill="#252525"
          />
          <ellipse
            cx="7.99999"
            cy="4.66667"
            rx="1.33333"
            ry="1.33333"
            transform="rotate(-90 7.99999 4.66667)"
            fill="#252525"
          />
          <circle
            cx="3.33333"
            cy="7.99967"
            r="1.33333"
            transform="rotate(-90 3.33333 7.99967)"
            fill="#252525"
          />
        </svg>
      ),
      activeLogoImg: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.33334 14.5C3.0572 14.5 2.83334 14.2761 2.83334 14L2.83334 8.66667C2.83334 8.39052 3.0572 8.16667 3.33334 8.16667C3.60949 8.16667 3.83334 8.39052 3.83334 8.66667L3.83334 14C3.83334 14.2761 3.60949 14.5 3.33334 14.5Z"
            fill="#03045E"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 14.5C7.72386 14.5 7.5 14.2761 7.5 14L7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8L8.5 14C8.5 14.2761 8.27614 14.5 8 14.5Z"
            fill="#03045E"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4.5C7.72386 4.5 7.5 4.27614 7.5 4L7.5 2C7.5 1.72386 7.72386 1.5 8 1.5C8.27614 1.5 8.5 1.72386 8.5 2L8.5 4C8.5 4.27614 8.27614 4.5 8 4.5Z"
            fill="#03045E"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.33334 7.83398C3.0572 7.83398 2.83334 7.61013 2.83334 7.33398L2.83334 2.00065C2.83334 1.72451 3.0572 1.50065 3.33334 1.50065C3.60949 1.50065 3.83334 1.72451 3.83334 2.00065L3.83334 7.33398C3.83334 7.61013 3.60949 7.83398 3.33334 7.83398Z"
            fill="#03045E"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6667 8.5C12.3905 8.5 12.1667 8.27614 12.1667 8L12.1667 2C12.1667 1.72386 12.3905 1.5 12.6667 1.5C12.9428 1.5 13.1667 1.72386 13.1667 2L13.1667 8C13.1667 8.27614 12.9428 8.5 12.6667 8.5Z"
            fill="#03045E"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6667 14.5C12.3905 14.5 12.1667 14.2761 12.1667 14L12.1667 12C12.1667 11.7239 12.3905 11.5 12.6667 11.5C12.9428 11.5 13.1667 11.7239 13.1667 12L13.1667 14C13.1667 14.2761 12.9428 14.5 12.6667 14.5Z"
            fill="#03045E"
          />
          <circle
            cx="12.6667"
            cy="11.3327"
            r="1.33333"
            transform="rotate(-90 12.6667 11.3327)"
            fill="#03045E"
          />
          <ellipse
            cx="7.99999"
            cy="4.66667"
            rx="1.33333"
            ry="1.33333"
            transform="rotate(-90 7.99999 4.66667)"
            fill="#03045E"
          />
          <circle
            cx="3.33333"
            cy="8.00065"
            r="1.33333"
            transform="rotate(-90 3.33333 8.00065)"
            fill="#03045E"
          />
        </svg>
      ),
    },
  ];

  const navigateToSideItems = (path: string) => {
    console.log("yh");
    if (pathname === "/builder") {
      router.push(`${path}`);
    } else {
      router.push(path);
    }
  };
  return (
    <Provider store={store}>
      <EntireAppLayout>
        <ProtectRoute>
          <div className="bg-Brand/Surface/surface-200 w-full min-h-screen">
            <header className="w-full px-5 sm:px-[24px] bg-Brand/Surface/surface-50 border border-Surface/surface-400 py-[16px] flex justify-between h-[76px] items-center z-[1000] fixed top-0">
              <Logo
                onClick={() => router.push("/")}
                className="cursor-pointer "
              />

              <div className="flex items-center gap-[24px]">
                <div className="flex md:hidden cursor-pointer w-10 h-10 items-center p-2 justify-center rounded-[50%] bg-Surface/surface-400">
                  {" "}
                  <Search className=" " />
                </div>
                <div className="relative md:w-[320px] md:flex hidden justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-lg  border-Brand/Surface/surface-800 border">
                  <input
                    type="text"
                    className="w-[82%]  pr-4 ml-4 h-10  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
                    placeholder="Explore"
                  />
                  <Search className=" " />
                </div>
                <div className="flex rounded-[50px] bg-Surface/surface-400 flex-col items-end p-2 relative">
                  <Notification />
                  <div className="w-[6px] h-[6px] rounded-[99px] bg-Accent/Danger/Danger-800 border border-s-Brand/Surface/surface-50 absolute top-[9px] right-[12px]"></div>
                </div>

                <div className="flex items-center gap-[2px]">
                  <Userpic className="w-10 h-10 rounded-[50%]" />
                  <DownArrow />
                </div>
              </div>
            </header>
            <section className="mt-[76px] ">
              <div className="flex w-full min-h-[calc(100vh+76px)] bg-Brand/Surface/surface-200 flex-col md:flex-row">
                <div className="  fixed top-[76px] md:w-[15%] left-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] w-full bg-Brand/Surface/surface-50 border border-Surface/surface-400  px-4 py-8 h-auto md:min-h-[747px]  gap-4 ">
                  <div className="sm:grid flex  sm:grid-cols-6 md:grid-cols-1 lg:grid-cols-2 w-full sm:gap-4 gap-6 overflow-x-auto horizontal-overflow sm:overflow-x-hidden">
                    {SidebarValues.map((content, index) => {
                      const { LogoImg, displayValue, link, activeLogoImg } =
                        content;
                      return (
                        <div
                          key={index}
                          onClick={() => navigateToSideItems(link)}
                          className={`flex min-w-fit sm:min-w-full flex-row md:flex-col justify-center self-auto md:min-h-[102px] items-center gap-2 p-2  border-Surface/surface-400 w-full cursor-pointer border rounded-[4px]   ${
                            pathname.startsWith(link) &&
                            "bg-Brand/Primary/Primary-100"
                          }
                    }
                  `}
                        >
                          <>
                            {pathname.startsWith(link)
                              ? activeLogoImg("")
                              : LogoImg("")}
                          </>
                          <h3
                            className={`font-DarkerGrotesque  leading-normal text-center text-[16px] font-medium self-stretch  ${
                              pathname.startsWith(link)
                                ? "text-Brand/Primary/Primary-800"
                                : "text-Text/Text-600"
                            }
                   
                   `}
                          >
                            {displayValue}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {children}
              </div>
            </section>
          </div>
        </ProtectRoute>
      </EntireAppLayout>
    </Provider>
  );
};

export default BuilderLayout;
