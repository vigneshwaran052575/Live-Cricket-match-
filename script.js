/* ==========================================
   LIVE MATCHES
========================================== */

const liveMatches = [

    {
        id: 1,

        series: "India vs Australia",

        venue: "Chennai",

        team1: {
            name: "India",
            flag: "🇮🇳",
            score: "186/4",
            overs: "18.2"
        },

        team2: {
            name: "Australia",
            flag: "🇦🇺",
            score: "Yet to bat",
            overs: ""
        },

        result:
            "India need 34 runs from 10 balls",

        /*
            Put the authorized streaming URL
            for this specific match here.
        */

        streamUrl: "https://www.jiohotstar.com/"

    },


    {
        id: 2,

        series: "England vs South Africa",

        venue: "London",

        team1: {
            name: "England",
            flag: "🏴",
            score: "142/5",
            overs: "16.4"
        },

        team2: {
            name: "South Africa",
            flag: "🇿🇦",
            score: "Yet to bat",
            overs: ""
        },

        result:
            "England batting",

        streamUrl: "#"

    },


    {
        id: 3,

        series: "New Zealand vs Pakistan",

        venue: "Auckland",

        team1: {
            name: "New Zealand",
            flag: "🇳🇿",
            score: "98/2",
            overs: "11.3"
        },

        team2: {
            name: "Pakistan",
            flag: "🇵🇰",
            score: "Yet to bat",
            overs: ""
        },

        result:
            "New Zealand batting",

        streamUrl: "#"

    }

];



/* ==========================================
   UPCOMING MATCHES
========================================== */

const upcomingMatches = [

    {
        id: 4,

        series: "India Tour",

        venue: "Mumbai",

        time: "Today • 7:30 PM",

        team1: {
            name: "India",
            flag: "🇮🇳"
        },

        team2: {
            name: "Australia",
            flag: "🇦🇺"
        }
    },


    {
        id: 5,

        series: "T20 International",

        venue: "Cape Town",

        time: "Tomorrow • 6:00 PM",

        team1: {
            name: "South Africa",
            flag: "🇿🇦"
        },

        team2: {
            name: "England",
            flag: "🏴"
        }
    },


    {
        id: 6,

        series: "International Cricket",

        venue: "Dubai",

        time: "Tomorrow • 8:00 PM",

        team1: {
            name: "Pakistan",
            flag: "🇵🇰"
        },

        team2: {
            name: "New Zealand",
            flag: "🇳🇿"
        }
    }

];



/* ==========================================
   OFFICIAL STREAMING SERVICES
========================================== */

const ottPlatforms = [

    {
        name: "Official OTT Platform",

        icon: "📺",

        description:
            "Official digital streaming platform. Check match availability and regional rights.",

        url: "https://www.jiohotstar.com/"
    },


    {
        name: "Official Broadcaster",

        icon: "📡",

        description:
            "Official television and sports broadcaster. Availability depends on tournament rights.",

        url: "#"
    },


    {
        name: "Sports Network",

        icon: "🏏",

        description:
            "Official sports network for selected cricket competitions.",

        url: "#"
    },


    {
        name: "International Cricket",

        icon: "🌎",

        description:
            "Find the official rights holder for your country.",

        url: "#"
    }

];



/* ==========================================
   TOURNAMENT DATA
========================================== */

const tournaments = {


    ICC: {

        title: "🏆 ICC Cricket Series",

        matches: [

            {
                date: "Today",

                team1: "🇮🇳 India",

                score1: "186/4",

                team2: "🇦🇺 Australia",

                score2: "Yet to bat",

                status:
                    "LIVE - India need 34 runs from 10 balls"
            },


            {
                date: "Tomorrow",

                team1: "🇿🇦 South Africa",

                score1: "-",

                team2: "🏴 England",

                score2: "-",

                status:
                    "Upcoming - 6:00 PM"
            },


            {
                date: "Friday",

                team1: "🇵🇰 Pakistan",

                score1: "-",

                team2: "🇳🇿 New Zealand",

                score2: "-",

                status:
                    "Upcoming - 7:30 PM"
            }

        ]

    },


    INDIA: {

        title: "🇮🇳 India Tour",

        matches: [

            {
                date: "Today",

                team1: "🇮🇳 India",

                score1: "186/4",

                team2: "🇦🇺 Australia",

                score2: "Yet to bat",

                status:
                    "LIVE"
            },


            {
                date: "Next Match",

                team1: "🇮🇳 India",

                score1: "-",

                team2: "🇦🇺 Australia",

                score2: "-",

                status:
                    "Upcoming"
            },


            {
                date: "Final Match",

                team1: "🇮🇳 India",

                score1: "-",

                team2: "🇦🇺 Australia",

                score2: "-",

                status:
                    "Upcoming"
            }

        ]

    },


    T20: {

        title: "🔥 T20 League",

        matches: [

            {
                date: "Today",

                team1: "🔵 Mumbai",

                score1: "172/6",

                team2: "🟡 Chennai",

                score2: "156/8",

                status:
                    "Mumbai won by 16 runs"
            },


            {
                date: "Tomorrow",

                team1: "🔴 Delhi",

                score1: "-",

                team2: "🟣 Kolkata",

                score2: "-",

                status:
                    "Upcoming - 7:30 PM"
            },


            {
                date: "Saturday",

                team1: "🟢 Bangalore",

                score1: "-",

                team2: "🔵 Mumbai",

                score2: "-",

                status:
                    "Upcoming - 7:30 PM"
            }

        ]

    },


    WORLD: {

        title: "🌎 World Cricket",

        matches: [

            {
                date: "Today",

                team1: "🇬🇧 England",

                score1: "142/5",

                team2: "🇿🇦 South Africa",

                score2: "Yet to bat",

                status:
                    "LIVE"
            },


            {
                date: "Tomorrow",

                team1: "🇳🇿 New Zealand",

                score1: "98/2",

                team2: "🇵🇰 Pakistan",

                score2: "Yet to bat",

                status:
                    "LIVE"
            },


            {
                date: "Sunday",

                team1: "🇱🇰 Sri Lanka",

                score1: "-",

                team2: "🇧🇩 Bangladesh",

                score2: "-",

                status:
                    "Upcoming"
            }

        ]

    }

};



/* ==========================================
   RENDER LIVE MATCHES
========================================== */

function renderLiveMatches() {

    const container =
        document.getElementById(
            "liveMatches"
        );


    container.innerHTML = "";


    liveMatches.forEach(match => {

        const card =
            document.createElement("div");


        card.className =
            "match-card";


        card.innerHTML = `

            <div class="match-top">

                <span class="live">
                    LIVE
                </span>

                <span>
                    ${match.series}
                </span>

            </div>


            <div class="match-body">


                <div class="team-row">

                    <div class="team-name">

                        <span class="team-flag">
                            ${match.team1.flag}
                        </span>

                        ${match.team1.name}

                    </div>


                    <div class="score">

                        ${match.team1.score}

                        <span class="overs">
                            ${match.team1.overs}
                        </span>

                    </div>

                </div>


                <div class="team-row">

                    <div class="team-name">

                        <span class="team-flag">
                            ${match.team2.flag}
                        </span>

                        ${match.team2.name}

                    </div>


                    <div class="score">

                        ${match.team2.score}

                    </div>

                </div>


                <div class="match-result">

                    ${match.result}

                </div>


                <div class="match-actions">


                    <button
                        class="action-btn"
                        onclick="showScorecard(${match.id})">

                        Scorecard

                    </button>


                    <button
                        class="action-btn watch-btn"
                        onclick="watchMatch(${match.id})">

                        📺 Watch

                    </button>


                </div>


            </div>

        `;


        container.appendChild(card);

    });

}



/* ==========================================
   UPCOMING MATCHES
========================================== */

function renderUpcomingMatches() {

    const container =
        document.getElementById(
            "upcomingMatches"
        );


    container.innerHTML = "";


    upcomingMatches.forEach(match => {

        const card =
            document.createElement("div");


        card.className =
            "match-card";


        card.innerHTML = `

            <div class="match-top">

                <span>
                    UPCOMING
                </span>

                <span>
                    ${match.series}
                </span>

            </div>


            <div class="match-body">


                <div class="team-row">

                    <div class="team-name">

                        <span class="team-flag">
                            ${match.team1.flag}
                        </span>

                        ${match.team1.name}

                    </div>

                    <strong>
                        -
                    </strong>

                </div>


                <div class="team-row">

                    <div class="team-name">

                        <span class="team-flag">
                            ${match.team2.flag}
                        </span>

                        ${match.team2.name}

                    </div>

                    <strong>
                        -
                    </strong>

                </div>


                <div class="match-result">

                    ${match.time}

                    <br>

                    📍 ${match.venue}

                </div>


                <div class="match-actions">

                    <button
                        class="action-btn"
                        onclick="setReminder(${match.id})">

                        🔔 Reminder

                    </button>

                </div>


            </div>

        `;


        container.appendChild(card);

    });

}



/* ==========================================
   RENDER OTT
========================================== */

function renderOTT() {

    const container =
        document.getElementById(
            "ottList"
        );


    container.innerHTML = "";


    ottPlatforms.forEach(platform => {

        const card =
            document.createElement("div");


        card.className =
            "ott-card";


        card.innerHTML = `

            <div class="ott-header">

                <div class="ott-logo">
                    ${platform.icon}
                </div>

                <h3>
                    ${platform.name}
                </h3>

            </div>


            <p>
                ${platform.description}
            </p>


            <a
                href="${platform.url}"
                class="ott-link"
                target="_blank"
                rel="noopener noreferrer">

                Visit Official Platform →

            </a>

        `;


        container.appendChild(card);

    });

}



/* ==========================================
   SHOW SCORECARD
========================================== */

function showScorecard(id) {

    const match =
        liveMatches.find(
            match => match.id === id
        );


    if (!match) {

        return;

    }


    alert(

        "🏏 SCORECARD\n\n" +

        match.team1.name +
        " : " +
        match.team1.score +

        "\n\n" +

        match.team2.name +
        " : " +
        match.team2.score +

        "\n\n" +

        match.result

    );

}



/* ==========================================
   WATCH MATCH
========================================== */

function watchMatch(id) {

    const match =
        liveMatches.find(
            match => match.id === id
        );


    if (!match) {

        return;

    }


    if (
        match.streamUrl &&
        match.streamUrl !== "#"
    ) {

        window.open(
            match.streamUrl,
            "_blank"
        );

        return;

    }


    alert(

        "No official streaming link " +
        "has been configured for this match."

    );

}



/* ==========================================
   REMINDER
========================================== */

function setReminder(id) {

    alert(
        "🔔 Match reminder added!"
    );

}



/* ==========================================
   REFRESH
========================================== */

function refreshMatches() {

    const button =
        document.querySelector(
            ".refresh-btn"
        );


    button.innerHTML =
        "⟳ Updating...";


    setTimeout(function () {

        button.innerHTML =
            "✓ Updated";


        setTimeout(function () {

            button.innerHTML =
                "↻ Refresh";

        }, 1500);


    }, 800);

}



/* ==========================================
   SCROLL
========================================== */

function scrollToLive() {

    document
        .getElementById("live")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToWatch() {

    document
        .getElementById("watch")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    const navbar =
        document.getElementById(
            "navbar"
        );


    navbar.classList.toggle(
        "active"
    );

}



/* ==========================================
   TOURNAMENT MATCHES
========================================== */

function showTournament(type) {

    const container =
        document.getElementById(
            "tournamentMatches"
        );


    const tournament =
        tournaments[type];


    if (!tournament) {

        return;

    }


    let html = `

        <div class="tournament-title">

            <h3>
                ${tournament.title}
            </h3>

            <button
                class="close-tournament"
                onclick="closeTournament()">

                ✕ Close

            </button>

        </div>

    `;


    tournament.matches.forEach(match => {

        html += `

            <div class="tournament-match">


                <div
                    class="tournament-match-header">

                    <span>
                        ${match.date}
                    </span>

                    <span>
                        Cricket Match
                    </span>

                </div>


                <div
                    class="tournament-teams">


                    <div class="tournament-team">

                        ${match.team1}

                    </div>


                    <div class="tournament-score">

                        ${match.score1}

                    </div>


                    <strong>
                        VS
                    </strong>


                    <div class="tournament-score">

                        ${match.score2}

                    </div>


                    <div class="tournament-team">

                        ${match.team2}

                    </div>


                </div>


                <div class="tournament-status">

                    ${match.status}

                </div>


            </div>

        `;

    });


    container.innerHTML = html;


    container.classList.add(
        "active"
    );


    container.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}



/* ==========================================
   CLOSE TOURNAMENT
========================================== */

function closeTournament() {

    const container =
        document.getElementById(
            "tournamentMatches"
        );


    container.classList.remove(
        "active"
    );

}



/* ==========================================
   DEMO SCORE UPDATE
========================================== */

function simulateLiveScore() {

    const match =
        liveMatches[0];


    let score =
        parseInt(
            match.team1.score
                .split("/")[0]
        );


    if (
        Math.random() > 0.5
    ) {

        score +=
            Math.floor(
                Math.random() * 4
            );


        match.team1.score =
            score + "/4";


        const heroScore =
            document.getElementById(
                "heroIndiaScore"
            );


        if (heroScore) {

            heroScore.innerText =
                match.team1.score;

        }


        renderLiveMatches();

    }

}



/* ==========================================
   START
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderLiveMatches();

        renderUpcomingMatches();

        renderOTT();


        /*
            Demo score refresh.

            Replace this later with
            a real cricket API.
        */

        setInterval(
            simulateLiveScore,
            20000
        );

    }
);