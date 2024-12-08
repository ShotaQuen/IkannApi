const axios = require('axios')
const cheerio = require('cheerio')
const FormData = require('form-data')

async function otakuDetail(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:116.0) Gecko/20100101 Firefox/116.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Referer': 'https://apk.support/',
        'Cache-Control': 'no-cache',
      },
      timeout: 100000,
    });

    const $ = cheerio.load(response.data);

    const title = $('.jdlrx h1').text().trim();
    const score = $('.infozingle span:contains("Skor")').text().replace('Skor:', '').trim();
    const status = $('.infozingle span:contains("Status")').text().replace('Status:', '').trim();
    const totalEpisodes = $('.infozingle span:contains("Total Episode")').text().replace('Total Episode:', '').trim();
    const genres = $('.infozingle span:contains("Genre") a')
      .map((i, el) => $(el).text().trim())
      .get();
    const synopsis = $('.sinopc').text().trim();
    const image = $('.fotoanime img').attr('src');

    const episodes = $('.episodelist ul li').map((i, el) => {
      const episodeTitle = $(el).find('a').text().trim();
      const episodeLink = $(el).find('a').attr('href');
      const releaseDate = $(el).find('.zeebr').text().trim();
      return { episodeTitle, episodeLink, releaseDate };
    }).get();

    const result = {
      title,
      score,
      status,
      totalEpisodes,
      genres,
      synopsis,
      image,
      episodes,
    };

    return result;
  } catch (error) {
    console.error('Error fetching details:', error.message);
    return null;
  }
}


module.exports = {
otakuDetail
}