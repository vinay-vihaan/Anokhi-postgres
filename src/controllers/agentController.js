const { Agent } = require('../models');

exports.createAgent = async (req, res) => {
    try {
        const { name, user_id } = req.body;
        const newAgent = await Agent.create({ name, user_id });
        res.status(201).json(newAgent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating agent', error });
    }
};

exports.getAllAgents = async (req, res) => {
    try {
        const agents = await Agent.findAll();
        res.status(200).json(agents);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching agents', error });
    }
};

exports.getAgentById = async (req, res) => {
    try {
        const agent = await Agent.findByPk(req.params.id);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json(agent);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching agent', error });
    }
};

exports.updateAgent = async (req, res) => {
    try {
        const { name, user_id } = req.body;
        const [updated] = await Agent.update({ name, user_id }, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        const updatedAgent = await Agent.findByPk(req.params.id);
        res.status(200).json(updatedAgent);
    } catch (error) {
        res.status(500).json({ message: 'Error updating agent', error });
    }
};

exports.deleteAgent = async (req, res) => {
    try {
        const deleted = await Agent.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting agent', error });
    }
};