const axios = require('axios')
const {
} = require('./lib/scraper')

async function handler(req, res) {
const { s, text, text1, avatar, username, url } = req.query;

try {

// ARTIFICIAL INTELLIGENCE
if (s === 'openai') { // OPENAI
const response = await axios.get(`https://api.agatz.xyz/api/gpt4o?message=${encodeURIComponent(text)}`
);
return res.status(200).json({
status: true,
result: response.data.data.result,
});
} else if (s === 'blackbox') { // BLACKBOX
const requestData = {
content: text,
cName: "S-AI",
cID: "S-AIbAQ0HcC"
};
const response = await axios.post('https://luminai.my.id/', requestData);
const sai = response.data;
const pe = sai.result;
return res.status(200).json({
status: true,
result: pe,
});
}
// GAME MENU
else if (s === 'otakudesu-src') { // OTKD-SRC
const response = await axios.get(`https://api.siputzx.my.id/api/anime/otakudesu/search?s=${encodeURIComponent(text)}`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'otakudesu-detail') { // OTKD-DETAIL
const response = await axios.get(`https://api.siputzx.my.id/api/anime/otakudesu/detail?url=${url}`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'otakudesu-ongoing') { // OTKD-ONGOING
const response = await axios.get(`https://api.siputzx.my.id/api/anime/otakudesu/ongoing?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'otakudesu-dl') { // OTKD-DL
const response = await axios.get(`https://api.siputzx.my.id/api/anime/otakudesu/download?url=${url}`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'abatch-src') { // ABATCH-SRC
const response = await axios.get(`https://api.agatz.xyz/api/animebatch?message=${encodeURIComponent(text)}`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'abatch-dl') { // ABATCH-DL
const response = await axios.get(`https://api.agatz.xyz/api/animebatchinfo?url=${url}`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'animesrc') { // ANIMESRC
const response = await animeSrc(text)
return res.status(200).json({
status: true,
data: response,
});
} else if (s === 'otakotaku') { // OTAKOTAKU
const response = await axios.get(`https://api.siputzx.my.id/api/s/otakotaku?query=${encodeURIComponent(text)}`)
return res.status(200).json({
status: true,
data: response.data.data,
});

// GAMES MENU
} else if (s === 'tebakgambar') { // TEBAKGAMBAR
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakgambar?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakheroml') { // TEBAKHEROML
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakheroml?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakjkt') { // TEBAKJKT
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakjkt?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakhewan') { // TEBAKHEWAN
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakhewan?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakgame') { // TEBAKGAME
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakgame?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakbendera') { // TEBAKBENDERA
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakbendera?-`
);
return res.status(200).json({
status: true,
data: response.data,
});
} else if (s === 'tebaklagu') { // TEBAKLAGU
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebaklagu?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebaklirik') { // TEBAKLIRIK
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebaklirik?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakkalimat') { // TEBAKKALIMAT
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakkalimat?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakkata') { // TEBAKKATA
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakkata?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebakkimia') { // TEBAKKIMIA
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebakkimia?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebaklogo') { // TEBAKLOGO
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebaklogo?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tkabupaten') { // TKABUPATEN
const response = await axios.get(`https://api.siputzx.my.id/api/games/kabupaten?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'tebaktebakan') { // TEBAKTEBAKAN
const response = await axios.get(`https://api.siputzx.my.id/api/games/tebaktebakan?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'family100') { // FAMILY100
const response = await axios.get(`https://api.siputzx.my.id/api/games/family100?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'caklontong') { // CAKLONTONG
const response = await axios.get(`https://api.siputzx.my.id/api/games/caklontong?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'susunkata') { // SUSUNKATA
const response = await axios.get(`https://api.siputzx.my.id/api/games/susunkata?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
} else if (s === 'asahotak') { // ASAHOTAK
const response = await axios.get(`https://api.siputzx.my.id/api/games/asahotak?-`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
}

// ANIME MENU
else if (s === 'otakudesu-detail') { // OTKD-DETAIL
const response = await axios.get(`https://api.siputzx.my.id/api/anime/otakudesu/detail?url=${url}`
);
return res.status(200).json({
status: true,
data: response.data.data,
});
}

// === Catch akhir (untuk semua error)
} catch (err) {
const errorResponse = {
status: false,
error: err.message,
...(err.response && {
statusCode: err.response.status,
data: err.response.data,
headers: err.response.headers,
}),
};

switch (err.response?.status) {
case 400:
return res.status(400).json({ ...errorResponse, message: 'Bad Request' });
case 403:
return res.status(403).json({ ...errorResponse, message: 'Forbidden' });
case 404:
return res.status(404).json({ ...errorResponse, message: 'Not Found' });
case 500:
return res.status(500).json({ ...errorResponse, message: 'Internal Server Error' });
case 504:
return res.status(504).json({ ...errorResponse, message: 'Gateway Timeout' });
default:
return res.status(500).json(errorResponse);
}}
}

module.exports = handler;