import { Menu } from "@/types/menu";

const menuData: Menu[] = [
    {
        id: 1,
        title: "Home",
        path: "/",
        newTab: false,
    },
    {
        id: 2,
        title: "Services",
        newTab: false,
        submenu: [
            {
                id: 41,
                title: "Detect and Respond",
                path: "/detect-and-respond",
                newTab: false,
            },
            {
                id: 42,
                title: "Offensive Security",
                path: "/pentesting",
                newTab: false,
            },
            {
                id: 43,
                title: "Cloud Security",
                path: "/cloud-security",
                newTab: false,
            },
            {
                id: 44,
                title: "Application Security",
                path: "/application-security",
                newTab: false,
            },
            {
                id: 45,
                title: "Governance, Risk & Compliance",
                path: "/grc",
                newTab: false,
            },
            {
                id: 46,
                title: "Specialized Training",
                path: "/training",
                newTab: false,
            },
        ],
    },
    {
        id: 3,
        title: "About",
        path: "/about",
        newTab: false,
    },
    {
        id: 4,
        title: "Support",
        path: "/contact",
        newTab: false,
    },
];
export default menuData;
