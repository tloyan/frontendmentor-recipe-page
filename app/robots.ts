import { MetadataRoute } from 'next'
import { projectInfo } from './projectInfo'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
        `${projectInfo.url}/sitemap.xml`
    ],
  }
}