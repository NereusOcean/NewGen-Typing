import axios from 'axios';

async function getText(language) {
    let data;
    if (language === 'en') {
            data = await axios.get(`https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`)
                .then((answ) => answ.data[0])
                .catch((err) => err.toJSON().message);

    } else if (language === 'ru') {
            data = await axios.get(`https://fish-text.ru/get?format=string&number=1`)
                .then((answ) => answ.data.text)
                .catch((err) => err.toJSON().message);
    }

    return data;
}

export default getText;