import { MetadataRoute } from 'next'
import { projectInfo } from './projectInfo'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: projectInfo.url,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}