module.exports={
  "title": "Feedback House for Developers",
  "tagline": "One stop shop for teams",
  "url": "https://developers.feedback.house",
  "baseUrl": "/",
  "organizationName": "feedback-house",
  "projectName": "developer-portal",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
    ],
    "repoUrl": "https://github.com/feedback-house/developer-portal"
  },
  "onBrokenLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": false,
          "path": "./docs",
          "sidebarPath": "./sidebars.json"
        },
        // "blog": {
        //   "path": "blog"
        // },
        // "theme": {
        //   "customCss": "./customTheme.css"
        // }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Feedback House for Developers",
      "logo": {
        "src": "img/favicon.ico"
      },
      "items": [
        {
          "to": "docs/getting-started",
          "label": "Documents",
          position: 'left',
        },
        {
          "to": "docs/api-getting-started",
          "label": "APIs",
          position: 'left',
        },
        {
          href: 'https://feedback.house/',
          label: 'Feedback',
          position: 'right',
        },
        {
          "to": "docs/help",
          "label": "Help",
          position: 'right',
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © Feedback House / Entria",
      "logo": {
        "src": "img/favicon.ico"
      }
    },
    "googleAnalytics": {
      "trackingID": "UA-90244905-5"
    }
  }
}