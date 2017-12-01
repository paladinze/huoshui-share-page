const settings = 'scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no'

function getPopupOffset({ width, height }) {
  const wLeft = window.screenLeft ? window.screenLeft : window.screenX
  const wTop = window.screenTop ? window.screenTop : window.screenY

  const left = wLeft + (window.innerWidth / 2) - (width / 2)
  const top = wTop + (window.innerHeight / 2) - (height / 2)

  return { top, left }
}

function getPopupSize(provider) {
  switch (provider) {
    case 'qq':
      return { width: 770, height: 408 }

    case 'weibo':
      return { width: 770, height: 350 }

    case 'github':
      return { width: 1020, height: 618 }

    default:
      return { width: 1020, height: 618 }
  }
}

function getPopupDimensions(provider) {
  const { width, height } = getPopupSize(provider)
  const { top, left } = getPopupOffset({ width, height })

  return `width=${width},height=${height},top=${top},left=${left}`
}

export default function openPopup(provider, url) {
  const windowName = provider
  return window.open(url, windowName, `${settings},${getPopupDimensions(provider)}`)
}
