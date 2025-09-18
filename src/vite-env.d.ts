/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_EmailJS_KEY: string
  readonly VITE_templateEmail: string
  readonly VITE_serviceEmailJS: string

  // plus d'autres variables d'environnement...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
