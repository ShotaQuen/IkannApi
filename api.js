const axios = require('axios')
const {
otakuDetail
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

// ANIME MENU
else if (s === 'otakuDetail') { // OTAKUDETAIL
const response = await otakuDetail(`${encodeURIComponent(url)}`)
return res.status(200).json({
status: true,
data: response,
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