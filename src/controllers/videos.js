const Videos = require('../models/Videos');
const { Op } = require('sequelize');

module.exports = {
    async index(req, res) {
        const videos = await Videos.findAll();
        return res.json(videos);
    },

    async show(req, res) {
        const video = await Videos.findByPk(req.params.id);
        if (!video) {
            return res.status(400).json({ error: 'Video not found' });
        }
        return res.json(video);
    },

    async store(req, res) {
        const { title, description, url } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        } else if (!description) {
            return res.status(400).json({ error: 'Description is required' });
        } else if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }

        let category = req.body.category;
        if (!category) {
            category = 1;
        }
        const video = await Videos.create({ title, category, description, url });
        return res.json(video);
    },

    async update(req, res) {
        const video = await Videos.findByPk(req.params.id);
        if (!video) {
            return res.status(400).json({ error: 'Video not found' });
        }
        const { title, description, url } = req.body;
        await video.update({ title, description, url });
        return res.json(video);
    },

    async destroy(req, res) {
        const video = await Videos.findByPk(req.params.id);
        if (!video) {
            return res.status(400).json({ error: 'Video not found' });
        }
        await video.destroy();
        return res.json({ message: 'Video deleted' });
    },

    async search(req, res) {
        const { search } = req.params;
        const videos = await Videos.findAll({
            where: {
                title: {
                    [Op.iLike]: `%${search}%`
                }
            }
        });
        return res.json(videos);
    }
};