import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";

export default [
    {
        to: '/',
        name: 'Home',
        Icon: IoHomeOutline
    },
    {
        to: '/profile',
        name: 'Post Packages',
        Icon: BiUserCircle
    },
    {
        to: '/dashboard',
        name: 'Post Blogs',
        Icon: BsSpeedometer2
    },
    {
        to: '/test-components',
        name: 'Clients',
        Icon: IoGridOutline
    },
];