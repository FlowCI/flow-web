export const TagNotification = 'notification'

export class PluginWrapper {

  constructor(plugin) {
    this.plugin = plugin
  }

  get id() {
    return this.plugin.id
  }

  get name() {
    return this.plugin.name
  }

  get tags() {
    return this.plugin.tags
  }

  get docker() {
    return this.plugin.docker
  }

  get icon() {
    return this.plugin.icon
  }

  get version() {
    return this.plugin.version
  }

  get desc() {
    return this.plugin.description
  }

  get source() {
    return this.plugin.source
  }

  get inputs() {
    return this.plugin.inputs
  }

  get isDefaultIcon() {
    return !this.plugin.icon
  }

  get isHttpLinkIcon() {
    const pathOrLink = this.plugin.icon
    if (!pathOrLink) {
      return false
    }

    return pathOrLink.startsWith('http') || pathOrLink.startsWith('https')
  }

  get isRepoSrcIcon() {
    const pathOrLink = this.plugin.icon
    if (!pathOrLink) {
      return false
    }

    return !this.isHttpLinkIcon
  }
}
