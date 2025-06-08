const express = require('express');
const router = express.Router();
const Menu = require('../Models/MenuItems');

// ✅ POST: Add a new menu item
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new Menu(data);
    const savedItem = await newMenuItem.save();
    console.log('Menu item saved');
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error saving menu item:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ GET: Fetch all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (err) {
    console.error('Error fetching menu:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ PARAMETERIZED: GET menu by taste
router.get('/category/:categoryType', async (req, res) => {
  try {
    const categoryType = req.params.categoryType.toLowerCase();

    const validCategories = ['starter', 'main-course', 'dessert', 'beverage'];

    if (!validCategories.includes(categoryType)) {
      return res.status(400).json({ error: 'Invalid category type' });
    }

    const filteredMenu = await Menu.find({ category: categoryType });

    if (filteredMenu.length === 0) {
      return res.status(404).json({ message: `No items found in category: ${categoryType}` });
    }

    res.status(200).json(filteredMenu);
  } catch (err) {
    console.error('Error fetching menu by category:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

