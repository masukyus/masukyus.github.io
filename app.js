// Kullanıcının bilgileri ve etkinlikleri için sahte veriler
const userData = {
    username: "masukyus",
    totalPoints: 25,
    activity: [
        { tweet: "Lorem ipsum dolor sit amet.", event: "like", points: 1 },
        { tweet: "Consectetur adipiscing elit.", event: "retweet", points: 1 },
        { tweet: "Sed do eiusmod tempor incididunt.", event: "comment", points: 1 },
        // ...
    ]
};

// Kullanıcının bilgilerini ve etkinlik geçmişini sayfaya yükleme
window.onload = function() {
    const usernameElement = document.getElementById("username");
    const totalPointsElement = document.getElementById("totalPoints");
    const activityTableBody = document.getElementById("activityTableBody");

    usernameElement.innerText = userData.username;
    totalPointsElement.innerText = userData.totalPoints;

    for (let i = 0; i < userData.activity.length; i++) {
        const activity = userData.activity[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${activity.tweet}</td>
            <td>${activity.event}</td>
            <td>${activity.points} XP</td>
        `;
        activityTableBody.appendChild(row);
    }
};
require('dotenv').config(); // .env dosyasını yüklemek için

const Twit = require('twit');

const T = new Twit({

  consumer_key: process.env.TWITTER_API_KEY,

  consumer_secret: process.env.TWITTER_API_SECRET_KEY,

  access_token: process.env.TWITTER_ACCESS_TOKEN,

  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

});

// Twitter API isteklerini burada gerçekleştirin
require('dotenv').config(); // .env dosyasını yüklemek için

const Twit = require('twit');

const T = new Twit({

  consumer_key: process.env.TWITTER_API_KEY,

  consumer_secret: process.env.TWITTER_API_SECRET_KEY,

  access_token: process.env.TWITTER_ACCESS_TOKEN,

  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

});

// Kullanıcının takipçilerini almak için API isteği gönderme

T.get('followers/list', { screen_name: 'kullanici_adi' }, (err, data, response) => {

  if (err) {

    console.error('Takipçiler alınamadı:', err);

    return;

  }

  

  const followers = data.users;

  console.log('Takipçiler:', followers);

});

// Bir tweetin beğeni sayısını almak için API isteği gönderme

T.get('statuses/show/:id', { id: 'tweet_id' }, (err, data, response) => {

  if (err) {

    console.error('Tweet alınamadı:', err);

    return;

  }

  

  const likesCount = data.favorite_count;

  console.log('Beğeni Sayısı:', likesCount);

});

// Bir tweete yanıt olarak tweet atma

const tweet = {

  status: 'Merhaba, bu bir yanıttır!',

  in_reply_to_status_id: 'yanit_olarak_atilan_tweet_id'

};

T.post('statuses/update', tweet, (err, data, response) => {

  if (err) {

    console.error('Tweet atılamadı:', err);

    return;

  }

  

  console.log('Tweet atıldı:', data);

});

// Bir tweeti retweet etme

T.post('statuses/retweet/:id', { id: 'retweet_edilecek_tweet_id' }, (err, data, response) => {

  if (err) {

    console.error('Retweet edilemedi:', err);

    return;

  }

  

  console.log('Retweet edildi:', data);

});



