const express = require("express");
const router = express.Router();
const friends = require('../models/friends');

// 1. GET all friends
router.get('/', (req, res) => {
    res.json(friends);
});

// 2. Filter by gender and/or starting letter
router.get('/filter', (req, res) => {
    const { gender, letter } = req.query;
    let matchingFriends = [...friends];

    if (gender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender === gender);
    }

    if (letter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.toLowerCase().startsWith(letter.toLowerCase()));
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({ error: "No matching friends found" });
    }
});

// 3. Only return key request headers
router.get('/info', (req, res) => {
    const info = {
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type'],
        'accept': req.headers['accept']
    };
    res.json(info);
});

// 4. Get friend by dynamic :id
router.get('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const friend = friends.find(f => f.id === friendId);

    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({ error: `Friend with ID ${friendId} not found.` });
    }
});

// 5. Add new friend
router.post('/', (req, res) => {
    const newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
        return res.status(400).json({ error: 'Friend must have a name and gender.' });
    }

    newFriend.id = newFriend.id || friends.length + 1;
    friends.push(newFriend);
    res.status(201).json(newFriend);
});

// 6. Update existing friend by :id
router.put('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const index = friends.findIndex(f => f.id === friendId);

    if (index === -1) {
        return res.status(404).json({ error: `Friend with ID ${friendId} not found.` });
    }

    const updatedFriend = { ...friends[index], ...req.body, id: friendId };
    friends[index] = updatedFriend;

    res.json(updatedFriend);
});

module.exports = router;
