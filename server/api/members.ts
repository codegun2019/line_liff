const members = [{
  name: 'KPLUS777',
  username: 'https://line.biz/2006157295-Adoy9vwj',
  role: 'member',
  avatar: { src: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu' }
},
{
  name: 'KPLUS888',
  username: 'https://line.biz/2006157295-Adoy9vwj',
  role: 'member',
  avatar: { src: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/benjamincanac' }
}, {
  name: 'KPLUS999',
  username: 'https://line.biz/2006157295-Adoy9vwj',
  role: 'member',
  avatar: { src: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/celinedumerc' }
}, ]

export default eventHandler(async () => {
  return members
})
