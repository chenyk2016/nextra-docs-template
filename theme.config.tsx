import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useEffect } from 'react'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 网站名称'
    }
  },
  head: () => {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 这里放置您的 JavaScript 代码
              console.log('网站加载完成！');
              // 其他代码...
            `
          }}
        />
      </>
    )
  }
}

export default config
