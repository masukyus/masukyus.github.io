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


