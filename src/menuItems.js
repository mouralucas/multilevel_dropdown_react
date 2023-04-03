export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'web design',
                url: 'web-design',
            },
            {
                title: 'web development',
                url: 'web-dev',
            },
            {
                title: 'SEO',
                url: 'seo',
            },
        ],
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Web Development',
        url: 'web-dev',
        submenu: [
            {
                title: 'Frontend',
                url: 'frontend',
            },
            {
                title: 'Backend',
                submenu: [
                    {
                        title: 'NodeJS',
                        url: 'node',
                    },
                    {
                        title: 'PHP',
                        url: 'php',
                    },
                ],
            },
        ],
    },
];