import { IS_DEVELOPMENT } from "../../../constants/env";

export const navbarItems = [
	{
		label: "About",
		items: [
			{
				label: "Me",
				href: "/about/me",
			},
			{
				label: "hz-software",
				href: "/about/hz-software",
			},
		],
	},
	{
		label: "Algorithms",
		items: [
			{
				label: "Topological Sort",
				href: "/algorithms/top-sort",
			},
			{
				label: "B+",
				href: "/algorithms/b-star",
			},
			{
				label: "Fib Calc",
				href: "/algorithms/fib-calc",
				available: IS_DEVELOPMENT,
			},
		],
	},
	{
		label: "Systems",
		available: IS_DEVELOPMENT,
		items: [
			{
				label: "CQRS",
				href: "/systems/cqrs",
			},
			{
				label: "Light Database",
				href: "/systems/light-database",
			},
			{
				label: "Kafka Stream",
				href: "/systems/kafka",
			},
			{
				label: "Saga",
				href: "/systems/saga",
			},
		],
	},
	{
		label: "Cloud",
		available: IS_DEVELOPMENT,
		items: [
			{
				label: "LQS",
				href: "/cloud/lqs",
			},
		],
	},
	{
		label: "Communication",
		available: IS_DEVELOPMENT,
		items: [
			{
				label: "gRPC",
				href: "/communication/grpc",
			},
			{
				label: "HTTP",
				href: "/communication/http",
			},
		],
	},
	{
		label: "Tools",
		items: [
			{
				label: "wc tools",
				href: "/tools/wc",
				available: IS_DEVELOPMENT,
			},
			{
				label: "Mini Brightness Controller #mini_linux_tools",
				href: "https://github.com/hadyelzayady/mini-brightness",
			},
		],
	},
	{
		label: "Applications",
		available: IS_DEVELOPMENT,
		items: [
			{
				label: "Infrastructure As Graph (IAG)",
				href: "https://hz-softwares.iag.io",
			},
			{
				label: "E-Commerce",
				href: "/applications/e-commerce",
			},
		],
	},
];
