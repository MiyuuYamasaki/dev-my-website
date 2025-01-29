// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// ミドルウェア設定
app.use(cors());
app.use(bodyParser.json());

// メール送信設定
const transporter = nodemailer.createTransport({
  service: 'gmail', // ここは使用するメールサービスによって変更
  auth: {
    user: 'your-email@gmail.com', // 実際のメールアドレスに変更
    pass: 'your-email-password', // メールパスワード（またはアプリ用パスワード）
  },
});

// メール送信APIエンドポイント
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com', // 受信者のメールアドレス
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // メール送信
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ status: 'error', message: error.message });
    }
    res
      .status(200)
      .send({ status: 'success', message: 'Email sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
