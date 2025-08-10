export interface IMember {
    name: string
    bio: string
    description: string
    github: string
    twitter?: string
    vue?: boolean
    vite?: boolean
}

export interface IEventItem {
    author: string
    github: string
    title: string
    ppt?: string
    video?: string
}

export interface IEvent {
    [key: string]: IEventItem[]
}
