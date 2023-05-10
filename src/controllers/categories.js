const Categories = require('../models/Categories');

module.exports = {
    async index(req, res) {
        const categories = await Categories.findAll();
        return res.json(categories);
    },

    async show(req, res) {
        const category = await Categories.findByPk(req.params.id);
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }
        return res.json(category);
    },

    async store(req, res) {
        const { title, color } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        } else if (!color) {
            return res.status(400).json({ error: 'Color is required' });
        }
        const category = await Categories.create({ title, color });
        return res.json(category);
    },

    async update(req, res) {
        const category = await Categories.findByPk(req.params.id);
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }
        const { title, color } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        } else if (!color) {
            return res.status(400).json({ error: 'Color is required' });
        }
        await category.update({ title, color });
        return res.json(category);
    },

    async destroy(req, res) {
        const category = await Categories.findByPk(req.params.id);
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }
        await category.destroy();

        return res.json({ message: 'Category deleted' });
    },

    async showVideos(req, res) {
        const category = await Categories.findByPk(req.params.id, {
            include: { association: 'videos' }
        });
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }
        return res.json(category.videos);
    }
};
