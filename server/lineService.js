const axios = require('axios');
require('dotenv').config();

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message/push';

const sendLineMessage = async (message) => {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const userId = process.env.LINE_USER_ID;

    if (!token || !userId) {
        console.warn('LINE_CHANNEL_ACCESS_TOKEN or LINE_USER_ID is missing in .env');
        return;
    }

    try {
        await axios.post(
            LINE_MESSAGING_API,
            {
                to: userId,
                messages: [
                    {
                        type: 'text',
                        text: message
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        console.log('Line message sent successfully');
    } catch (error) {
        console.error('Error sending Line message:', error.response ? error.response.data : error.message);
    }
};

module.exports = { sendLineMessage };
