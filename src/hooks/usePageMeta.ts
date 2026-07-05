import { useEffect } from 'react'

type PageMeta = {
  title: string
  description: string
}

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.append(element)
  }

  element.content = content
}

function setPropertyMeta(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.append(element)
  }

  element.content = content
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setPropertyMeta('og:title', title)
    setPropertyMeta('og:description', description)
  }, [description, title])
}
