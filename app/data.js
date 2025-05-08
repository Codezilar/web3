import { BiHomeAlt } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { TbArrowsExchange2 } from "react-icons/tb";
import { TbGift } from "react-icons/tb";
import { LuDroplets } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";

export const navItems = [
    {
        name: "Home",
        icon: <BiHomeAlt />,
        link: "/",
    },
    {
        name: "Dashboard",
        icon: <IoBarChart />,
        link: "/dashboard",
    },
    {
        name: "Swap",
        icon: <TbArrowsExchange2 />,
        link: "/swap",
    },
    {
        name: "Token Claims",
        icon: <TbGift />,
        link: "/tokenclaims",
    },
    {
        name: "NFT Claims",
        icon: <TbGift />,
        link: "/nftclaims",
    },
    {
        name: "Faucet",
        icon: <LuDroplets />,
        link: "/faucet",
    },
]

export const feature = [
    {
        name: "Portfolio Dashboard",
        desc: "Track all your tokens and NFTs in one place with real-time price updates and performance metrics.",
        icon: <IoBarChart />,
    },
    {
        name: "Token & NFT Swapping",
        desc: "Seamlessly swap your tokens and NFTs with the best rates across multiple chains.",
        icon: <TbArrowsExchange2 />,
    },
    {
        name: "Token & NFT Claims",
        desc: "Participate in airdrops and claim free tokens and NFTs from various projects.",
        icon: <TbGift />,
    },
    {
        name: "Testnet Faucet",
        desc: "Get testnet tokens for multiple chains to test your applications and transactions.",
        icon: <LuDroplets />,
    },
    {
        name: "Market Insights",
        desc: "Stay updated with the latest market trends, new token listings, and price movements.",
        icon: <FaArrowTrendUp />,
    },

    {
        name: "Multi-Chain Support",
        desc: "Access all major blockchain networks including Ethereum, Polygon, Solana, and more from one interface.",
        icon: <BiWallet />,
    },
]

export const portAsset = [
    {
        img: "",
        coin: "Bitcoin",
        coinShort: "BTC",
        worth: "62,548.19",
        percent: "+1.25",
        balance: "0.08",
        balanceWorth: "5,003.85",
    },
    {
        img: "",
        coin: "Ethereum",
        coinShort: "ETH",
        worth: "3,452.68",
        percent: "+2.34",
        balance: "1.5",
        balanceWorth: "5,179.02",
    },
    {
        img: "",
        coin: "Solana",
        coinShort: "SOL",
        worth: "145.78",
        percent: "+6.35",
        balance: "12",
        balanceWorth: "1,749.36",
    },
    {
        img: "",
        coin: "Cardano",
        coinShort: "ADA",
        worth: "0.45",
        percent: "-0.89",
        balance: "2500",
        balanceWorth: "1,125",
    },
]

export const tokenclaim = [
    {
        img: "/NAVIGATE_4K_S20_loop-poster@sm.webp",
        condition: "Ongoing",
        startDate: "Jun 5, 2023",
        endDate: "Sep 5, 2023",
        name: "Arbitrum Airdrop",
        desc: "Claim your Arbitrum tokens based on your Ethereum activity.",
        action: "Claim Now"
    },
    {
        img: "/NAVIGATE_4K_S20_loop-poster@sm.webp",
        condition: "Ongoing",
        startDate: "Jun 5, 2023",
        endDate: "Sep 5, 2023",
        name: "ZK-Sync Era Launch",
        desc: "Participate in the ZK-Sync Era launch and claim your tokens.",
        action: "Claim Now"
    },
    {
        img: "/NAVIGATE_4K_S20_loop-poster@sm.webp",
        condition: "Upcoming",
        startDate: "Aug 1, 2023",
        endDate: "Oct 1, 2023",
        name: "Optimism Season 2",
        desc: "Second phase of Optimism's token distribution to active users.",
        action: "Remind Me"
    },
    {
        img: "/NAVIGATE_4K_S20_loop-poster@sm.webp",
        condition: "Upcoming",
        startDate: "Oct 1, 2023",
        endDate: "Dec 1, 2023",
        name: "Base Chain Incentives",
        desc: "Early user incentives for Coinbase's Base Chain adoption.",
        action: "Remind Me"
    },
    {
        img: "/NAVIGATE_4K_S20_loop-poster@sm.webp",
        condition: "Ended",
        startDate: "Feb 10, 2023",
        endDate: " Apr 10, 2023",
        name: "Uniswap V3 Retroactive",
        desc: "Retroactive airdrop for early Uniswap v3 adopters.",
        action: "More Info"
    },
    {
        img: "/NAVIGATE_4K_S20_loop-poster@sm.webp",
        condition: "Ended",
        startDate: "Jan 15, 2023 ",
        endDate: "Mar 15, 2023",
        name: "Polygon zkEVM Rewards",
        desc: "Rewards for early testers of Polygon's zkEVM solution.",
        action: "More Info"
    },
]