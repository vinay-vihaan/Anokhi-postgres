
const { SavedSearch } = require('../models');

const createSavedSearch = async (req, res) => {
    try {
        const savedSearch = await SavedSearch.create(req.body);
        res.status(201).json(savedSearch);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSavedSearchesByUser = async (req, res) => {
    try {
        const savedSearches = await SavedSearch.findAll({ where: { user_id: req.params.userId } });
        res.status(200).json(savedSearches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteSavedSearch = async (req, res) => {
    try {
        const deleted = await SavedSearch.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Saved search not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createSavedSearch,
    getSavedSearchesByUser,
    deleteSavedSearch,
};