const fetch = require('isomorphic-unfetch')

module.exports = async (req, res) => {
  const { email } = req.body

  try {
    const body = new URLSearchParams()

    body.append('email', email)

    const invitation = await fetch('https://temp.cheonghyun.com/slack/submit.php', {
      method: 'POST',
      headers: {
        via: 'Seia-Soto; comduck-web',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body
    })
    const text = await invitation.text()

    res.json({
      email,
      text
    })
  } catch (e) {
    console.error(e)

    res.json({
      email,
      e
    })
  }
}
