const fetch = require('node-fetch');

const CSV_URL = 'https://app.trevor.io/share/view/7794ab07-e8af-4386-a596-0a44a064109c/1d/pennygambl3r_Affiliate_Stake_com_Wager_Race_Statistics.csv?seed=55';

module.exports = async (req, res) => {
    try {
        const response = await fetch(CSV_URL);
        const data = await response.text();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send('Error fetching CSV data');
    }
};
