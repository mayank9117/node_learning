const express = require('express');
const router = express.Router();
const Person = require('./../Models/Person'); // Make sure this is correct

// ✅ POST route for adding a new person
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(savedPerson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ GET all persons
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ PARAMETERIZED GET: Filter by workType (chef/manager/waiter)
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;

    const validWorkTypes = ['chef', 'manager', 'waiter'];
    if (!validWorkTypes.includes(workType)) {
      return res.status(404).json({ error: 'Invalid work type' });
    }

    const response = await Person.find({ work: workType });
    console.log('Response fetched');
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;            // URL se id nikalna
    const updatedPersonData = req.body;        // Jo data update karna hai

    const updatedPerson = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,            // Updated document return kare
        runValidators: true   // Mongoose validations chalaye
      }
    );

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log('Data updated');
    res.status(200).json(updatedPerson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;

    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log('Data deleted');
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// comments addedby user

module.exports = router;
