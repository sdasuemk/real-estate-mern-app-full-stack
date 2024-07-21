import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create-listing', verifyToken, createListing);
router.delete('/delete-listing/:id', verifyToken, deleteListing);
router.post('/update-listing/:id', verifyToken, updateListing);
router.get('/get-a-listing/:id', getListing);
router.get('/get-listings', getListings);

export default router;