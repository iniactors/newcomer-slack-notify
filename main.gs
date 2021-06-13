// Google Forms（入会フォーム）へのコンテナバインドで動きます
function onFormSubmit(e) {
  let result = {}
  let formResponses = e.response
  let time = formResponses.getTimestamp()
  result['time'] = Date.parse(time)
  result['email'] = formResponses.getRespondentEmail()
  let itemResponses = formResponses.getItemResponses()
  for (let i = 0; i < itemResponses.length; i++) {
    let itemResponse = itemResponses[i]
    result[itemResponse.getItem().getTitle()] = itemResponse.getResponse()
  }
  sendToSlack(result, '通知') //通知チャンネルへ投稿
}

function sendToSlack(content, channel) {
  const URL =
    '[INCOMING_WEBHOOK_URL]'
  let data = {
    channel: channel,
    username: '入会歓迎bot',
    attachments: [
      {
        color: '#F2D492',
        mrkdwn_in: ['fields'],
        pretext: '*入会者が現れた！*',
        fields: [
          {
            title: '氏名',
            value: content['氏名'],
            short: false,
          },
          {
            title: 'メールアドレス',
            value: content.email,
            short: false,
          },
          {
            title: '希望職',
            value: content['希望職'].join(),
            short: false,
          },
        ],
        ts: content.time,
      },
    ],
  }
  let payload = JSON.stringify(data)
  let options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload,
  }
  UrlFetchApp.fetch(URL, options)
}

