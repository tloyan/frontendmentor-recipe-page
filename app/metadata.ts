import { Metadata } from "next";
import { projectInfo } from "./projectInfo";

export const metadata: Metadata = {
  title: projectInfo.title,
  description: projectInfo.description,
  generator: 'Next.js',
  alternates: {
    canonical: projectInfo.url
  },
  applicationName: projectInfo.name,
  referrer: 'origin-when-cross-origin',
  keywords: projectInfo.keywords,
  authors: [{ name: 'Thomas Loyan', url: 'https://thomasloyan.com' }],
  creator: 'Thomas Loyan',
  publisher: 'Thomas Loyan',
  openGraph: {
    title: projectInfo.title,
    description: projectInfo.description,
    url: projectInfo.url,
    siteName: projectInfo.title,
    images: [{
      url: projectInfo.previewUrl,
      width: 1440,
      height: 1056,
      alt: projectInfo.previewAlt,
    }],
    type: "website",
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: {
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png'
    },
  },
  twitter: {
    card: 'summary',
    title: projectInfo.title,
    description: projectInfo.description,
    creator: '@thomasloyan',
    images: {
      url: projectInfo.previewUrl,
      alt: projectInfo.previewAlt,
    },
  }
}