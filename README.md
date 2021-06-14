# newcomer-slack-notify
Google Apps Script (GAS) とGoogle Formsを利用したSlackへの入会通知

## 使用方法
SlackのIncoming Webhookを使います。  
1. Google Formsの編集ページからスクリプトエディタを起動し、フォームに紐づいたスクリプトを作ります。（コンテナバインド）  
2. main.gsをスクリプトエディタにコピーし、`main.gs`中の`[INCOMING_WEBHOOK_URL]`にIncoming WebhookのURLを入れます。  
3. GASのトリガーをフォーム送信時など適切に設定します。  
以上。

## ライセンス
Apache-2.0 License
