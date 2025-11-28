const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');
const { validateAgent } = require('../validators/agentValidators');

// Route to get all agents
router.get('/', agentController.getAllAgents);

// Route to get a single agent by ID
router.get('/:id', agentController.getAgentById);

// Route to create a new agent
router.post('/', validateAgent, agentController.createAgent);

// Route to update an existing agent
router.put('/:id', validateAgent, agentController.updateAgent);

// Route to delete an agent
router.delete('/:id', agentController.deleteAgent);

module.exports = router;