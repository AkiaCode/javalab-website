const fetch = require('isomorphic-unfetch')
const FormData = require('form-data')

module.exports = async (req, res) => {
  const { email } = req.body

  try {
    const body = new FormData()

    body.append('email', email)

    const invitation = await fetch('https://temp.cheonghyun.com/slack/submit.php', {
      method: 'POST',
      headers: {
        via: 'Seia-Soto; comduck-web',
        'Content-Type': 'multipart/form-data; charset=UTF-8'
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
