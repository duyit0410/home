import type { AppPositionProvider } from "../value-objects"

export interface AppProps {
    name: string
    logo: string
    url: string
    position: AppPositionProvider
}
