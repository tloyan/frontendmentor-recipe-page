import { Person, CreativeWork, WithContext, WebPage } from "schema-dts"
import { projectInfo } from "./projectInfo"

const person: Person = {
  "@type": "Person",
  "name": "Thomas Loyan",
  "url": "https://thomasloyan.com",
  "jobTitle": "Frontend Developer",
  "sameAs": [
    "https://github.com/tloyan",
    "https://www.frontendmentor.io/profile/tloyan",
    "https://www.linkedin.com/in/thomas-loyan-919776143/",
    "https://x.com/thomasloyan",
  ]
}

const creativeWork: CreativeWork = {
  "@type": "CreativeWork",
  "name": projectInfo.name,
  "description": projectInfo.description,
  "datePublished": new Date().toISOString().split('T')[0],
  "image": projectInfo.previewUrl,
  "inLanguage": "en",
  "author": person
}

export const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": projectInfo.title,
    "description": projectInfo.description,
    "url": projectInfo.url,
    "creator": person,
    "publisher": person,
    "mainEntity": creativeWork,
    "keywords": projectInfo.keywords
  }