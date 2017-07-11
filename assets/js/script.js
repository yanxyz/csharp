(function () {
  // 导航
  function nav() {
    const home = $('home-link').pathname
    if (home === location.pathname) return

    const parts = location.pathname.replace(home, '').split('/').filter(x => x)
    if (!parts.length) return

    const lastItem = parts[parts.length - 1]
    const items = []
    parts.slice(0, -1).reduce((p, c) => {
      p += c + '/'
      items.push(`<a href="${p}">${c}</a>`)
      return p
    }, home)
    items.push(lastItem)
    items.unshift('')
    $('site-nav').insertAdjacentHTML('beforeend', items.join('<span class="divider">/</span>'))
  }
  nav()

  // 外部链接图标
  $('site-main').querySelectorAll('a').forEach(a => {
    if (a.host !== location.host && !a.querySelector('img')) {
      a.insertAdjacentHTML('afterbegin', '<svg aria-hidden="true" class="octicon octicon-link-external" width="14" height="14"><use xlink:href="#octicon-link-external"></use></svg>')
    }
  })

  function $(id) {
    return document.getElementById(id)
  }
})()
