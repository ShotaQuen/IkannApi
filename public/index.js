// Data Features
const features = [
    {
        name: "OpenAI",
        method: "GET",
        description: "AI/openai",
        category: "AI",
        endpoint: "../api",
        query: "s=openai&text=Hai%20kamu"
    },
    {
        name: "BlackBox",
        method: "GET",
        description: "AI/blackbox",
        category: "AI",
        endpoint: "../api",
        query: "s=blackbox&text=Hai%20kamu"
    },
    {
    name: "LuminAI",
    method: "GET",
    description: "AI/luminai",
    category: "AI",
    endpoint: "../api",
    query: "s=luminai&text=Hai%20kamu"
  },
  {
    name: "Simi-Simi",
    method: "GET",
    description: "AI/simisimi",
    category: "AI",
    endpoint: "../api",
    query: "s=simisimi&text=Hai%20kamu"
  },
  {
    name: "Gemini",
    method: "GET",
    description: "AI/gemini",
    category: "AI",
    endpoint: "../api",
    query: "s=gemini&text=Hai%20kamu"
  },
  {
    name: "Mora-AI",
    method: "GET",
    description: "AI/morai",
    category: "AI",
    endpoint: "../api",
    query: "s=morai&text=Hai%20kamu&username=Vioo"
  },
  {
    name: "Moshi-AI",
    method: "GET",
    description: "AI/moshiai",
    category: "AI",
    endpoint: "../api",
    query: "s=moshiai&text=Hai%20kamu"
  },
  {
    name: "Latukam",
    method: "GET",
    description: "AI/latukam",
    category: "AI",
    endpoint: "../api",
    query: "s=latukam&text=Hai%20kamu"
  },
  {
    name: "Google Search",
    method: "GET",
    description: "Search/google",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=google&text=Kylian%20Mbappe"
  },
  {
    name: "NPM Search",
    method: "GET",
    description: "Search/npm",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=npm&text=Axios"
  },
  {
    name: "Pinterest",
    method: "GET",
    description: "Search/pinterest",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=pinterest&text=Kylian%20Mbappe"
  },
  {
    name: "Wikimedia",
    method: "GET",
    description: "Search/wikimedia",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=wikimedia&text=Harimau"
  },
  {
    name: "Playstore",
    method: "GET",
    description: "Search/playstore",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=playstore&text=Minecraft"
  },
  {
    name: "Happymod",
    method: "GET",
    description: "Search/happymod",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=happymod&text=Minecraft"
  },
  {
    name: "Komiku Search",
    method: "GET",
    description: "Search/komiku",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=komiku&text=Shikanoko"
  },
  {
    name: "McpeDL",
    method: "GET",
    description: "Search/mcpedl",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=mcpedl&text=Jenny"
  },
  {
    name: "Xvideo Search",
    method: "GET",
    description: "Search/xvidsearch",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=xvidsearch&text=Pussy"
  },
  {
    name: "Xnxx Search",
    method: "GET",
    description: "Search/xnxxsearch",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=xnxxsearch&text=Pussy"
  },
  {
    name: "Game Search",
    method: "GET",
    description: "Search/gamesrc",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=gamesrc&text=Anime"
  },
  {
    name: "Android1",
    method: "GET",
    description: "Search/andro1",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=andro1&text=Stickman"
  },
  {
    name: "Apk Pure",
    method: "GET",
    description: "Search/apkpure",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=apkpure&text=Stickman"
  },
  {
    name: "Lite Apks",
    method: "GET",
    description: "Search/liteapks",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=liteapks&text=Stickman"
  },
  {
    name: "PlayStore",
    method: "GET",
    description: "Search/playstore",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=playstore&text=Stickman"
  },
  {
    name: "Antara News",
    method: "GET",
    description: "Search/antaran",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=antaran&text=Narkoba"
  },
  {
    name: "Cerpen Search",
    method: "GET",
    description: "Search/cerpen",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=cerpen&text=motivasi"
  },
  {
    name: "Google Image",
    method: "GET",
    description: "Search/gimage",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=gimage&text=Kylian%20Mbappe"
  },
    {
        name: "Tebak Gambar",
        method: "GET",
        description: "Games/tebakgambar",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakgambar"
    },
    {
        name: "Tebak HeroML",
        method: "GET",
        description: "Games/tebakheroml",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakheroml"
    },
    {
        name: "Tebak JKT",
        method: "GET",
        description: "Games/tebakjkt",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakjkt"
    },
    {
        name: "Tebak Hewan",
        method: "GET",
        description: "Games/tebakhewan",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakhewan"
    },
    {
        name: "Tebak Game",
        method: "GET",
        description: "Games/tebakgame",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakgame"
    },
    {
        name: "Tebak Bendera",
        method: "GET",
        description: "Games/tebakbendera",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakbendera"
    },
    {
        name: "Tebak Lagu",
        method: "GET",
        description: "Games/tebaklagu",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaklagu"
    },
    {
        name: "Tebak Lirik",
        method: "GET",
        description: "Games/tebaklirik",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaklirik"
    },
    {
        name: "Tebak Kalimat",
        method: "GET",
        description: "Games/tebakkalimat",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakkalimat"
    },
    {
        name: "Tebak Kata",
        method: "GET",
        description: "Games/tebakkata",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakkata"
    },
    {
        name: "Tebak Kimia",
        method: "GET",
        description: "Games/tebakkimia",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakkimia"
    },
    {
        name: "Tebak Logo",
        method: "GET",
        description: "Games/tebaklogo",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaklogo"
    },
    {
        name: "Tebak Kabupaten",
        method: "GET",
        description: "Games/tkabupaten",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tkabupaten"
    },
    {
        name: "Tebak Tebakan",
        method: "GET",
        description: "Games/tebaktebakan",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaktebakan"
    },
    {
        name: "Family100",
        method: "GET",
        description: "Games/family100",
        category: "GAMES",
        endpoint: "../api",
        query: "s=family100"
    },
    {
        name: "Cak Lontong",
        method: "GET",
        description: "Games/caklontong",
        category: "GAMES",
        endpoint: "../api",
        query: "s=caklontong"
    },
    {
        name: "Susun Kata",
        method: "GET",
        description: "Games/susunkata",
        category: "GAMES",
        endpoint: "../api",
        query: "s=susunkata"
    },
    {
        name: "Asah Otak",
        method: "GET",
        description: "Games/asahotak",
        category: "GAMES",
        endpoint: "../api",
        query: "s=asahotak"
    },
    
  {
    name: "Otakudesu Search",
    method: "GET",
    description: "Anime/otakudesu-src",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-src&text=Naruto"
  },
  {
    name: "Otakudesu Detail",
    method: "GET",
    description: "Anime/otakudesu-detail",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-detail&url=https://otakudesu.cloud/lengkap/btr-nng-sub-indo-part-1"
  },
  {
    name: "Otakudesu Ongoing",
    method: "GET",
    description: "Anime/otakudesu-ongoing",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-ongoing"
  },
  {
    name: "Otakudesu Download",
    method: "GET",
    description: "Anime/otakudesu-dl",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-dl&url=https://otakudesu.cloud/lengkap/btr-nng-sub-indo-part-1"
  },
  {
    name: "Animebatch Search",
    method: "GET",
    description: "Anime/abatch-src",
    category: "ANIME",
    endpoint: "../api",
    query: "s=abatch-src&text=Maou"
  },
  {
    name: "Animebatch Download",
    method: "GET",
    description: "Anime/abatch-dl",
    category: "ANIME",
    endpoint: "../api",
    query: "s=abatch-dl&url=https://www.animebatch.id/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii-sub-indo/"
  },
  {
    name: "Anime Search",
    method: "GET",
    description: "Anime/animesrc",
    category: "ANIME",
    endpoint: "../api",
    query: "s=animesrc&text=Naruto"
  },
  {
    name: "OtakOtaku",
    method: "GET",
    description: "Anime/otakotaku",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakotaku&text=Mahiru"
  },
    {
    name: "To Base64",
    method: "GET",
    description: "Convert/tobase64",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=tobase64&text=Halo%20kamu"
  },
  {
    name: "To Utf8",
    method: "GET",
    description: "Convert/toutf8",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=toutf8&text=SGFsbyBrYW11"
  },
  {
    name: "To GithubRaw",
    method: "GET",
    description: "Convert/githubraw",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=githubraw&url=https://github.com/ViooWA/Web/blob/main/vercel.json"
  },
  {
    name: "To GithubOri",
    method: "GET",
    description: "Convert/githubori",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=githubori&url=https://raw.githubusercontent.com/ViooWA/Web/main/vercel.json"
  },
  {
    name: "Cecan Indonesia",
    method: "GET",
    description: "Random/indonesia",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=indonesia"
  },
  {
    name: "Cecan China",
    method: "GET",
    description: "Random/china",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=china"
  },
  {
    name: "Cecan Japan",
    method: "GET",
    description: "Random/japan",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=japan"
  },
  {
    name: "Cecan Korea",
    method: "GET",
    description: "Random/korea",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=korea"
  },
  {
    name: "Cecan Thailand",
    method: "GET",
    description: "Random/thailand",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=thailand"
  },
  {
    name: "Cecan Vietnam",
    method: "GET",
    description: "Random/vietnam",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=vietnam"
  },
  {
    name: "Cecan Malaysia",
    method: "GET",
    description: "Random/Malaysia",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=malaysia"
  },
  {
    name: "Asupan Random",
    method: "GET",
    description: "Random/asupan",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=asupan"
  },
  {
    name: "Remini",
    method: "GET",
    description: "Tools/remini",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=remini&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Reminiv2",
    method: "GET",
    description: "Tools/reminiv2",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=reminiv2&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Recolor",
    method: "GET",
    description: "Tools/recolor",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=recolor&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Dehaze",
    method: "GET",
    description: "Tools/dehaze",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=dehaze&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Screenshot-Web",
    method: "GET",
    description: "Tools/ssweb",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=ssweb&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Remove Background",
    method: "GET",
    description: "Tools/removebg",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=removebg&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  
  {
    name: "Stalk Github",
    method: "GET",
    description: "Stalk/stalk-ghuser",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-ghuser&text=ViooWA"
  },
  {
    name: "Stalk GhRepo",
    method: "GET",
    description: "Stalk/stalk-ghrepo",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-ghrepo&text=ViooWA&text1=Js"
  },
  {
    name: "Stalk NPM",
    method: "GET",
    description: "Stalk/stalk-npm",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-npm&text=axios"
  },
  {
    name: "Stalk Tiktok",
    method: "GET",
    description: "Stalk/stalk-tt",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-tt&text=mrbeast"
  },
  {
    name: "Stalk YouTube",
    method: "GET",
    description: "Stalk/stalk-yt",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-yt&text=SanjayaAds"
  },
  {
    name: "Stalk Instagram",
    method: "GET",
    description: "Stalk/stalk-ig",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-ig&text=Cristiano"
  },
  {
    name: "Quotes Sindiran",
    method: "GET",
    description: "Quotes/qsindiran",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qsindiran"
  },
  {
    name: "Quotes Bucin",
    method: "GET",
    description: "Quotes/qbucin",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qbucin"
  },
  {
    name: "Quotes Senja",
    method: "GET",
    description: "Quotes/qsenja",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qsenja"
  },
  {
    name: "Quotes Fakta",
    method: "GET",
    description: "Quotes/qfakta",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qfakta"
  },
  {
    name: "NSFW",
    method: "GET",
    description: "NSFW/nsfw",
    category: "NSFW & SFW",
    endpoint: "../api",
    query: "s=nsfw&text=trap"
  },
  {
    name: "SFW",
    method: "GET",
    description: "SFW/sfw",
    category: "NSFW & SFW",
    endpoint: "../api",
    query: "s=sfw&text=waifu"
  },
  
  {
    name: "MediaFire",
    method: "GET",
    description: "Downloader/mediafire",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=mediafire&url=https://www.mediafire.com/file/o0008kd4n0q8dxa/Infinity-V1.0.0+.zip/file"
  },
  {
    name: "Tiktok",
    method: "GET",
    description: "Downloader/ttdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ttdl&url=https://vm.tiktok.com/ZSjVn47bC/"
  },
  {
    name: "Instagram",
    method: "GET",
    description: "Downloader/igdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=igdl&url=https://www.instagram.com/p/DCQhOuXTRvE/?img_index=1&igsh=MWF2dXU3aWtpazY2NQ=="
  },
  {
    name: "Facebook",
    method: "GET",
    description: "Downloader/fbdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=fbdl&url=https://www.facebook.com/share/r/12BFZAtjpS8/?mibextid=qDwCgo"
  },
  {
    name: "Capcut",
    method: "GET",
    description: "Downloader/capcut",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=capcut&url=https://www.capcut.com/t/Zs8Sw9wsE/%20aesthetic"
  },
  {
    name: "Google Drive",
    method: "GET",
    description: "Downloader/gdrive",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=gdrive&url=https://drive.google.com/file/d/1YTD7Ymux9puFNqu__5WPlYdFZHcGI3Wz/view?usp=drivesdk"
  },
  {
    name: "YouTube",
    method: "GET",
    description: "Downloader/ytdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ytdl&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "YouTubeV2",
    method: "GET",
    description: "Downloader/ytdlv2",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ytdlv2&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "Ytmp4",
    method: "GET",
    description: "Downloader/ytmp4",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ytmp4&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "Ytmp3",
    method: "GET",
    description: "Downloader/ytmp3",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ytmp3&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "Twitter",
    method: "GET",
    description: "Downloader/twitter",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=twitter&url=https://twitter.com/Eminem/status/943590594491772928"
  },
  {
    name: "Terabox",
    method: "GET",
    description: "Downloader/terabox",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=terabox&url=https://terabox.com/s/1A6XAXNBdHuLneJ51dNNy0g"
  },
  {
    name: "Xvideo-DL",
    method: "GET",
    description: "Downloader/xvideodl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=xvideodl&url=https://www.xvideos.com/video.ueuulmd7082/colok_memek_pake_stang_motor"
  },
  {
    name: "Xnxx-DL",
    method: "GET",
    description: "Downloader/xnxxdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=xnxxdl&url=https://www.xnxx.com/video-15jsg545/five_hot_girls_love_to_lick_they_pussy"
  },
  {
    name: "Brat Sticker",
    method: "GET",
    description: "Maker/brat",
    category: "MAKER",
    endpoint: "../api",
    query: "s=brat&text=Halo%20kamu"
  },
  {
    name: "Yt Comment",
    method: "GET",
    description: "Maker/ytcomment",
    category: "MAKER",
    endpoint: "../api",
    query: "s=ytcomment&text=Halo%20kamu&avatar=https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg&username=Vioo"
  },
  {
    name: "Carbonify",
    method: "GET",
    description: "Maker/carbon",
    category: "MAKER",
    endpoint: "../api",
    query: "s=carbon&text=Halo%20kamu"
  },
  {
    name: "Txt Image",
    method: "GET",
    description: "Maker/txtimg",
    category: "MAKER",
    endpoint: "../api",
    query: "s=txtimg&text=Halo%20kamu"
  },
  {
    name: "MemeGen",
    method: "GET",
    description: "Maker/memegen",
    category: "MAKER",
    endpoint: "../api",
    query: "s=memegen&url=https://pomf2.lain.la/f/6wng83b5.jpg&text=Halo&text1=kamu"
  },
  {
    name: "BlurImage",
    method: "GET",
    description: "Maker/blurimg",
    category: "MAKER",
    endpoint: "../api",
    query: "s=blurimg&url=https://i.ytimg.com/vi/LIohsg2kHEM/maxresdefault.jpg"
  },
  {
    name: "Beautiful",
    method: "GET",
    description: "Maker/beautiful",
    category: "MAKER",
    endpoint: "../api",
    query: "s=beautiful&url=https://i.ytimg.com/vi/LIohsg2kHEM/maxresdefault.jpg"
  },
  {
    name: "Facepalm",
    method: "GET",
    description: "Maker/facepalm",
    category: "MAKER",
    endpoint: "../api",
    query: "s=facepalm&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
];

// Data Folders
const folders = [
    { name: "AI", icon: "fas fa-brain", info: "Artificial Intelligence related features" },
    { name: "GAMES", icon: "fas fa-gamepad", info: "Game related features" },
    { name: "SEARCH", icon: "fas fa-search", info: "Search related features" },
    { name: "DOWNLOADER", icon: "fas fa-arrow-down", info: "Downloader related features" },
    { name: "CONVERT", icon: "fa-solid fa-rotate", info: "Convert related features" },
    { name: "RANDOM", icon: "fa-solid fa-shuffle", info: "Random related features" },
    { name: "TOOLS", icon: "fa-solid fa-tools", info: "Tools related features" },
    { name: "STALK", icon: "fa-solid fa-star", info: "Stalk related features" },
    { name: "MAKER", icon: "fa-solid fa-image", info: "Maker related features" },
    { name: "QUOTES", icon: "fa-solid fa-newspaper", info: "Quotes related features" },
    { name: "NSFW & SFW", icon: "fa-solid fa-circle-exclamation", info: "Nsfw & sfw related features" },
    { name: "ANIME", icon: "fas fa-ghost", info: "Anime related features" }
];

// Render Folders
function renderFolders() {
    const foldersContainer = document.getElementById('folders-container');
    folders.forEach(folder => {
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folder-card', 'bg-gray-700');

        folderDiv.innerHTML = `
            <div class="folder-name text-white">
                <i class="${folder.icon} text-white"></i> ${folder.name}
            </div>
            <div class="folder-action">
                <button onclick="showFeatures('${folder.name}')">Open</button>
            </div>
        `;
        foldersContainer.appendChild(folderDiv);
    });
}

// Total Features
const totalFolders = folders.length;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("totalFolders").textContent = `${totalFolders}`;
});
const totalFeature = features.length;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("totalFeatures").textContent = `${totalFeature}`;
});

// Show or Hide Folder Features and Information
function showFeatures(folderName) {
    const featuresContainer = document.getElementById('features-container');
    const infoSection = document.getElementById('info-section');
    const infoText = document.getElementById('info-text');

    // Toggle visibility
    if (featuresContainer.style.display === 'block' && infoText.innerText.includes(folderName)) {
        featuresContainer.style.display = 'none';
        infoSection.style.display = 'none';
        return;
    }

    // Show the info section with folder description
    const folder = folders.find(f => f.name === folderName);
    infoText.innerText = folder ? folder.info : 'No information available';
    infoSection.style.display = 'block';

    // Show the features related to the folder
    const filteredFeatures = features.filter(f => f.category === folderName);

    const featuresTableBody = document.getElementById('featuresTable-body');
    featuresTableBody.innerHTML = '';

    filteredFeatures.forEach((feature, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="text-white">${index + 1}</td>
            <td class="text-white" >${feature.name}</td>
            <td class="text-white" >${feature.method}</td>
            <td><button class="action-button" onclick="redirectToEndpoint('${feature.endpoint}', '${feature.query}', '${feature.method}')">Open</button></td>
        `;
        featuresTableBody.appendChild(row);
    });

    // Display the features table
    featuresContainer.style.display = 'block';
}

// Redirect to Endpoint
function redirectToEndpoint(endpoint, query, method) {
    if (method === "GET") {
        window.open(`${endpoint}?${query}`, "_blank");
    } else if (method === "POST") {
        fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: query })
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }
}

// Search Function
document.getElementById('searchInput').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#featuresTable-body tr');

    rows.forEach(row => {
        const featureName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (featureName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Initial Render
renderFolders();
